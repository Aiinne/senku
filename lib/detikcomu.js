const axios = require('axios')
const cheerio = require('cheerio')

const  detik = () => new Promise((resolve, reject) => {
    axios.request(`https://news.detik.com/indeks`, {
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
        $('#indeks-container').each(function (an, jg){
            $(jg).find('article.list-content__item > .media.media--left.media--image-radius.block-link').each(function (BIT, CH) {
                let judul = $(CH).find('div.media__image > a > span > img').attr('title')
                let date = $(CH).find('div.media__text > div.media__date > span').attr('title')
                let thumb = $(CH).find('div.media__image > a > span > img').attr('src')
                let url = $(CH).find('div.media__image > a').attr('href')
                const result = {
                    url: url,
                    judul: judul,
                    date: date,
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

module.exports = detik