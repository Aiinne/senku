const axios = require('axios')
const cheerio = require('cheerio')
const querystring = require('querystring')
const moment = require('moment')

async function Penyakit(tanggal) {
        if (!tanggal) {
            return {
                status: false,
                creator: 'Tanaka',
                message: 'Silahkan isi query tanggal DD-MM-YYYY, contoh: ?tanggal=01-12-2020'
            }
        }

        // check date is valid
        const m = moment(tanggal, 'DD-MM-YYYY')
        const url = 'https://primbon.com/cek_potensi_penyakit.php'

        if (!m.isValid()) {
            return {
                status: false,
                creator: 'Tanaka',
                message: 'Silahkan isi query tanggal DD-MM-YYYY, contoh: ?tanggal=01-12-2020'
            }
        }

        try {
            const dataPost = {
                tanggal: m.date(),
                bulan: (m.month() + 1),
                tahun: m.year(),
                hitung: 'Submit!',
            }
            const { data } = await axios.post(url, querystring.stringify(dataPost))
            const selector = cheerio.load(data)
            const result = selector('div[id="container"]').find('div[id="body"]')
            const resultList = selector('div[id="container"]').find('div[id="body"] > ul > li')

            // remove unnecessary data
            result.find('br').replaceWith('\n')
            const dataText = result.text()
            const array = dataText.split('\n')
            const indexToSplice = array.findIndex((f) => f === 'Sektor yg dianalisa:')
            const getArrayFromIndex = array.splice(indexToSplice, array.length)
            const indexToSplice2 = getArrayFromIndex.findIndex((f) => f.includes('Anda tidak memiliki') || f.includes('Anda memiliki'))
            const getArrayFromIndex2 = getArrayFromIndex.splice(0, (indexToSplice2 + 1)).filter((f) => f !== '')

            const deskripsi = getArrayFromIndex2[getArrayFromIndex2.length - 1]
            const analisa = getArrayFromIndex2.splice(1, getArrayFromIndex2.length - 2)
            const penyakit = []
            resultList.each((index, elm) => {
                penyakit[index] = selector(elm).text()
            })

            const resultResponse = {
                analisa,
                deskripsi,
                penyakit,
            }

            return resultResponse
        } catch (err) {
            return {
                status: false,
                creator: 'Tanaka',
                message: err.message
            }
        }
    }

module.exports = Penyakit
