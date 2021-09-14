const axios = require('axios')
const cheerio = require('cheerio')

const kiryuu = (query) => new Promise((resolve, reject) => {
    axios.request(`https://kiryuu.id/?s=${query}`, {
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
        $('.bs').each(function (so, lo){
            $(lo).find('.bsx').each(function (IAM, RA) {
                let url = $(RA).find('a').attr('href')
                let judul = $(RA).find('a').attr('title')
                let desc = $(RA).find('div.bigor > div.adds > div.epxs').text().trim()
                let rating = $(RA).find('div.bigor > div.adds > div.rt > div.rating > div.numscore').text().trim()
                let thumb = $(RA).find('div.limit > img').attr('src')
                const result = {
                    url: url,
                    judul: judul,
                    desc: desc,
                    rating: rating,
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

module.exports = kiryuu