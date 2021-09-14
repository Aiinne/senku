const axios = require('axios')
const cheerio = require('cheerio')

const  indoxxi = (query) => new Promise((resolve, reject) => {
    axios.request(`https://204.48.22.58/?s=${query}`, {
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
        $('#featured').each(function (ta, na){
            $(na).find('.ml-item').each(function (ka, kun) {
                let urll = $(kun).find('a').attr('href')
                let judul = $(kun).find('a').attr('title')
                let duration = $(kun).find('a > div.rating-durasi > span.mli-durasi').text().trim()
                let rating = $(kun).find('a > div.rating-durasi > span.mli-rating').text().trim()
                let quality = $(kun).find('a > span.mli-quality.hd').text().trim()
                let image = $(kun).find('a > img').attr('src')
                const url = urll.replace(/\/\//gi, 'https://')
                const thumb = image.replace(/\/\//gi, 'https://')
                const result = {
                    url: url,
                    judul: judul,
                    duration: duration,
                    rating: rating,
                    quality: quality,
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

module.exports = indoxxi