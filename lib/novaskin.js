const axios = require('axios')
const cheerio = require('cheerio')
const { contains } = require('cheerio/lib/static')

//const kiryuu = (query) => new Promise((resolve, reject) => {
    axios.request(`https://minecraft.novaskin.me/search?q=Tanaka Kun`, {
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
        $('#gallery-list').each(function (Ta, na){
            $(na).find('div[class="col-xs-4 col-md-2 model-Player placeholder"]').each(function (ka, kun) {
                let url = $(kun).find('a.hovercard').attr('href')
                let judul = $(kun).find('h4').text()
                let thumb = $(kun).find('img').attr('src')
                let id_skin = $(kun).find('a.hovercard').attr('data-id')
                let results = {
                    url: 'https://minecraft.novaskin.me/'+url.replace(/\//gi, ''),
                    judul: judul,
                    thumb: thumb,
                    skin: `http://novask.in/${id_skin}.png`
                }
                hasil.push(results)
                console.log(hasil)
            })
        })
//        resolve({
//            status: true,
//            creator: `Takayui`,
//            result: hasil
//        })
    })
//})

//module.exports = kiryuu