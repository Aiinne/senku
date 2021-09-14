const axios = require('axios')
const cheerio = require('cheerio')

const detiks = (query) => new Promise((resolve, reject) => {
    axios.request(`https://www.detik.com/search/searchall?query=${query}`, {
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
        $('body > div.wrapper.full > div > div').each(function (an, jg){
            $(jg).find('article').each(function (BIT, CH) {
                let judul = $(CH).find('a > span.box_text > h2').text().trim()
                let date = $(CH).find('a > span.box_text > span').text().trim()
                let thumb = $(CH).find('a > span.ratiobox.box_thumb > span > img').attr('src')
                let url = $(CH).find('a').attr('href')
                const result = {
                    url: url,
                    judul: judul,
                    thumb: thumb
                }
                hasil.push(result)
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
    })
})

module.exports = detiks