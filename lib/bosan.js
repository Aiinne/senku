const axios = require('axios')

async function Bosan() {
        try {
            const url = 'https://www.boredapi.com/api/activity'

            const result = await axios.get(url)
            const resultResponse = {
                status: false,
                creator: 'Tanaka',
                activity: result.data.activity,
                type: result.data.type
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

module.exports = Bosan
