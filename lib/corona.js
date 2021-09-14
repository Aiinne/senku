const axios = require('axios');
const cheerio = require('cheerio');

async function corona(query) {
	try {
	const link = await axios.get(`https://www.worldometers.info/coronavirus/country/${query}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	const data = {
        status: true,
		creator: 'Takayui',
		result: {
			kasus: kasus,
			meninggal: mati,
			sembuh: sembuh
		}
	}
	return data
} catch (err) {
    console.log(err)
    res.send({ status: link.status, creator: 'Takayui', message: 'Mohon Maaf Ada Yang Error' })
}
}

const Corona = (query) => new Promise((resolve, reject) => {
    try {
		corona(query).then(data => {
			resolve(data);
        }).catch(err => {
            console.log(err)
            reject({
                status: false,
                creator: 'Takayui',
                message: `Maaf Ada Yang Coba Priksa Kembali query Anda`
            })
        })
    } catch (err) {
        reject({
			status: false,
            creator: 'Takayui',
			message: `Maaf Ada Yang Error Mungking Lagi Di Perbaiki`
		});
    }
})

module.exports = Corona
