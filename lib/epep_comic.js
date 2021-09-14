const axios = require('axios')
const cheerio = require('cheerio')

const ff_comic = () => new Promise((resolve, reject) => {
    axios.request(`https://ff.garena.com/media/comic/id/`, {
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
        $('ul.g-comic-list').each(function (an, jg){
            $(jg).find('a').each(function (BIT, CH) {
                let title = $(CH).find('li.g-comic-item > div.comic-title').text().trim()
                let thumb = $(CH).find('li.g-comic-item > div.g-comic-main > img').attr('src')
                let capter = $(CH).find('li.g-comic-item > div.g-comic-main > div.g-comic-mask').text().trim()
                let urll = $(CH).attr('href')
                const url = "https://ff.garena.com"+urll
                const result =  ({
                    title: title,
                    thumb: thumb,
                    capter: capter,
                    url: url
                })
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

module.exports = ff_comic