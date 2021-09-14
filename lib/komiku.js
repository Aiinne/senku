const axios = require('axios')
const cheerio = require('cheerio')

const komiku = (query) => new Promise((resolve, reject) => {
    axios.request(`https://data3.komiku.id/cari/?post_type=manga&s=${query}`, {
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9,id;q=0.8",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
        }
    }).then(respon => {
        let hasil = []
        const $ = cheerio.load(respon.data)
        $('.daftar').each(function (an, jg){
            $(jg).find('.bge').each(function (BIT, CH) {
                let judul = $(CH).find('div.kan > a > h3').text().trim()
                let judul2 = $(CH).find('div.kan > span.judul2').text().trim()
                let desc = $(CH).find('div.kan > span').text().trim()
                let thumb = $(CH).find('div.bgei > a > img').attr('data-src')
                let urll = $(CH).find('div.bgei > a').attr('href')
                const url = "https://komiku.id"+urll
                const result = {
                    url: url,
                    judul: judul,
                    judul2: judul2,
                    thumb: thumb,
                    desc: desc
                }
                hasil.push(result)
            })
        })
        resolve({
            status: true,
            creator: `Takayui`,
            result: hasil
        })
    }).catch(err => reject({
        status: false,
        creator: `Takayui`,
        message: 'Maaf Ada Yang Salah'
    }))
})

module.exports = komiku