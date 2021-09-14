const axios = require('axios')
const cheerio = require('cheerio')

const mcpedl = (query) => new Promise((resolve, reject) => {
    axios.request(`https://mcpedl.com/?s=${query}`, {
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
        $('.content__wrap').each(function (an, jg){
            $(jg).find('.content__wrap-row').each(function (FU, CK) {
                let urll = $(CK).find('div.post > a').attr('href')
                let judul = $(CK).find('div.post > h2.post__title > a').text().trim()
                let desc = $(CK).find('div.post > p.post__text').text().trim()
                let date = $(CK).find('div.post > div.post__meta > div.post__date').text().trim()
                const url = "https://mcpedl.com"+urll
                const result = {
                    url: url,
                    judul: judul,
                    date: date,
                    desc: desc 
                }
                hasil.push(result)
            })
        })
        resolve({
            status: true,
            creator: 'Takayui',
            result: hasil
        })
    }).catch(err => reject({
        status: false,
        creator: `Takayui`,
        message: 'Maaf Ada Yang Salah'
    }))
})

module.exports = mcpedl