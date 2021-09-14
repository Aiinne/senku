
const needle = require('needle')

const Nulis = (teks) => new Promise((resolve, reject) => {
    needle(`https://freerestapi-backend-py.herokuapp.com/nulis?text=${teks}`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = Nulis
