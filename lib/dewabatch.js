const axios = require('axios')
const cheerio = require('cheerio')

const dewabatch = (query) => new Promise((resolve, reject) => {
    axios.request(`https://dewabatch.com/?s=${query}`, {
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
            "cookie": "__utmc=72074758; __utmz=72074758.1622198647.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not provided); HstCfa4282329=1622198648014; HstCmu4282329=1622198648014; c_ref_4282329=https://www.google.com/; __dtsu=6D0016219965045CE20565F72CA404B2; __utma=72074758.1719021884.1622198647.1622378903.1622469293.5; __utmt=1; HstCnv4282329=4; HstCns4282329=6; perf_dv5Tr4n=1; __utmb=72074758.3.10.1622469293; HstCla4282329=1622469347326; HstPn4282329=3; HstPt4282329=15"
        }
    }).then(respon => {
        let hasil = []
        const $ = cheerio.load(respon.data)
        $('.dev').each(function (an, jg){
            $(jg).find('.white > ul > li.contentpostnew').each(function (BIT, CH) {
                let judul = $(CH).find('div.dtl > h2 > a').text().trim()
                let thumb = $(CH).find('div.thumb > a > img').attr('src')
                let desc = $(CH).find('div.dtl > div.entry-content.synopspost').text().trim()
                let url = $(CH).find('div.thumb > a').attr('href')
                const result = {
                    url: url,
                    judul: judul,
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

module.exports = dewabatch