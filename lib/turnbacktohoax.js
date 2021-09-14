const axios = require('axios')
const cheerio = require('cheerio')

const hoax = () => new Promise((resolve, reject) => {
    axios.request(`https://turnbackhoax.id/`, {
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
        $('#main-content').each(function (co, li){
            $(li).find('article').each(function (HO, OH) {
                let url = $(OH).find('figure.mh-loop-thumb > a').attr('href')
                let judul = $(OH).find('div.mh-loop-content.mh-clearfix > div.mh-loop-excerpt > div.mh-excerpt > p').text().trim()
                let author = $(OH).find('div.mh-loop-content.mh-clearfix > header > div.mh-meta.mh-loop-meta > span.mh-meta-author.author.vcard').text().trim()
                let date = $(OH).find('div.mh-loop-content.mh-clearfix > header > div.mh-meta.mh-loop-meta > span.mh-meta-date.updated').text().trim()
                let thumb = $(OH).find('figure.mh-loop-thumb > a > img').attr('src')
                const result = {
                    url: url,
                    judul: judul,
                    author: author,
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

module.exports = hoax