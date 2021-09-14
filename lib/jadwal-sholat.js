const axios = require('axios')

    async function JadwalSholat(kota) {
        try {
            if (kota) {
                const today = new Date().toISOString().slice(0, 10).split('-')
                const url = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${kota}/${today[0]}/${today[1]}.json`

                const { data } = await axios.get(url)
                // eslint-disable-next-line radix
                const dateToday = parseInt(today[2]) - 1
                return (data[dateToday])
            }

            const url = 'https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json'
            const result = await axios.get(url)
            const resultKota = {
                status: true,
                creator: 'Takayui',
                message: 'Silahkan masukan query kota untuk mendapatkan jadwal spesifik, contoh ?kota=muarabungo',
                kota: result.data
            }
            return resultKota
        } catch (err) {
            return {
                status: false,
                creator: 'Takayui',
                message: err.message
            }
        }
    }

module.exports = JadwalSholat
