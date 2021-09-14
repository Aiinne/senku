const axios = require('axios')

    async function Quran() {
        try {
            const url = 'https://api.banghasan.com/quran/format/json/acak'
            const result = await axios.get(url)

            const resultResponse = {
                surat: result.data.surat.nama,
                asma: result.data.surat.asma,
                surat_ke: result.data.surat.nomor,
                arti: result.data.surat.arti,
                tipe: result.data.surat.type,
                keterangan: result.data.surat.keterangan,
                jumlah_ayat: result.data.surat.ayat,
                rukuk: result.data.surat.rukuk,
                ayat: {
                    ayat_ke: result.data.acak.id.ayat,
                    teks_id: result.data.acak.id.teks,
                    teks_ar: result.data.acak.ar.teks,
                },
            }

            return resultResponse
        } catch (err) {
            return {
                status: false,
                creator: 'Tanaka',
                message: err.message
            }
        }
    }

module.exports = Quran
