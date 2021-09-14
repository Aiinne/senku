const axios = require('axios')

    async function Meme() {
        try {
            const url = 'https://meme-api.herokuapp.com/gimme'
            const result = await axios.get(url)
            const resultResponse = {
                post_link: result.data.postLink,
                subreddit: result.data.subreddit,
                title: result.data.title,
                author: result.data.author,
                url: result.data.url,
            }

            return resultResponse
        } catch (err) {
            return {
                status: false,
                creator: 'Takayui',
                message: err.message
            }
        }
    }

module.exports = Meme
