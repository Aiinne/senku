const axios = require('axios')
const { transform } = require('camaro')
//const { CustomMessage } = require('helpers/CustomMessage')


    async function Alkitab(name, chapter, number) {
        if (!name && !chapter && !number) {
            return {
                status: false,
                creator: 'Takayui',
                message: 'Silahkan isi query name, chapter dan number, contoh: ?name=yohanes&chapter=1&number=1'
            }
        }
        try {
            const url = `https://alkitab.sabda.org/api/passage.php?passage=${name}+${chapter}:${number}`
            const result = await axios.get(url)
            const xml = result.data
            const template =
            ['/bible/book', {
                name: '@name',
                title: 'title',
                chapter: 'chapter/chap',
                description: ['chapter/verses/verse', {
                    number: 'number',
                    text: 'text',
                }],
            }]

            const resultResponse = await transform(xml, template)
            return resultResponse[0]
        } catch (err) {
            return {
                status: false,
                creator: 'Takayui',
                message: err.message
            }
        }
    }

module.exports = Alkitab