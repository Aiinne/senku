const axios = require('axios')

async function Surat(surat, ayat) {
        try {
            if (surat && !ayat) {
                const urlSurat = `https://api.banghasan.com/quran/format/json/surat/${surat}`
                const result = await axios.get(urlSurat)
                const json = result.data.hasil[0]
                const resultResponse = {
                    surat: json.nama,
                    asma: json.asma,
                    surat_ke: json.nomor,
                    arti: json.arti,
                    tipe: json.type,
                    keterangan: json.keterangan,
                    jumlah_ayat: json.ayat,
                    rukuk: json.rukuk,
                }

                return resultResponse
            }

            if (surat && ayat) {
                const urlAyat = `https://api.banghasan.com/quran/format/json/surat/${surat}/ayat/${ayat}`
                const result = await axios.get(urlAyat)
                const jsonAyat = result.data.ayat
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
                        ayat_ke: jsonAyat.proses[0],
                        teks_id: jsonAyat.data.id[0].teks,
                        teks_ar: jsonAyat.data.ar[0].teks,
                    },
                }

                return resultResponse
            }

            return {
                status: false,
                creator: 'Tanaka',
                message: 'Silahkan isi query surat atau ayat, contoh: ?surat=1 atau ?surat=1&ayat=3'
            }
        } catch (err) {
            return {
                status: false,
                creator: 'Tanaka',
                message: err.message
            }
        }
    }

module.exports = Surat
