const axios = require('axios')
const cheerio = require('cheerio')

const wikihow = () => new Promise((resolve, reject) => {    
    axios.request(`https://id.wikihow.com/Halaman-Utama`, {
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
        }
    }).then(respon => {
        let hasil = []
        const $ = cheerio.load(respon.data)
        $('#hp_coauthor').each(function (an, jg){
            $(jg).find('#hp_coauthor_container > .hp_thumb  ').each(function (FU, CK) {
                let urll = $(CK).find('a').attr('href')
                let judul = $(CK).find('a > div > p').text().trim()
                let thumb = $(CK).find('a > div > img').attr('data-src')
                const url = "https://id.wikihow.com"+urll
                const result = {
                    url: url,
                    judul: judul,
                    thumb: thumb
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

module.exports = wikihow