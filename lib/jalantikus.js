const axios = require('axios')
const cheerio = require('cheerio')

const jalantikus = (query) => new Promise((resolve, reject) => {
    axios.request(`https://jalantikus.com/search/articles/pubg/`, {
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
            "cookie": "_ga=GA1.2.amp-p1h07DFWbD7Ve0avP_9FxXRN5A_WTYyXBHrO5bif4XuN_MWBrHdhhiEbouri8IdW; _hjid=a8194f51-6a32-4b78-be9a-b538b5787c52; AMP_TOKEN=AHTRwNNrU0mq5ucA5zcT2YKNyvqiTglKPgQhjtqs3nBwtG8dtoXmeSkORacTAO0gp4bBijQP72QNej9qST_qFk3J; _gid=GA1.2.407355322.1622462317; valid_until=1622525383; access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uX3Rva2VuIjpmYWxzZSwib2xkX3Rva2VuIjpudWxsLCJ1c2VyX2FnZW50Ijoibm9kZS1mZXRjaFwvMS4wICgraHR0cHM6XC9cL2dpdGh1Yi5jb21cL2JpdGlublwvbm9kZS1mZXRjaCkiLCJnZW5lcmF0ZWQiOjE2MjI1MTQ1ODMsImdlbmVyYXRlZF9taWNybyI6IjAuODU5NzgzMDAgMTYyMjUxNDU4MyIsInZhbGlkX3VudGlsIjoxNjIyNTI1MzgzfQ.dXtQanUueyIBjjhIWmbF8EfEx9ARwgaqTp0c3FM9bpM; perf_dv5Tr4n=1; jcoPageCount=16; _gat_UA-56475281-2=1"
        }
    }).then(respon => {
        let hasil = []
        const $ = cheerio.load(respon.data)
        $('.infinite-scroll-block').each(function (an, jg){
            $(jg).find('.post-block-with-category').each(function (FU, CK) {
                let url = $(CK).find('a').attr('href')
                let judul = $(CK).find('div.post-block-with-category__info > p > a').text()
                let publish = $(CK).find('time').text()
                let thumb = $(CK).find('img').attr('data-src')
                const result = {
                    url: 'https://jalantikus.com'+url,
                    judul: judul,
                    thumb: thumb,
                    publish: publish
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

module.exports = jalantikus