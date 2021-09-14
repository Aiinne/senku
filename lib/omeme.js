const fetch = require('node-fetch')

async function Random() {
    let c;
	let url = [
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950274-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950270-1000xauto-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950275-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950276-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950277-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950282-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950283-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950284-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950286-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950287-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950288-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950293-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950291-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950294-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950295-1000xauto-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950298-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950301-1000xauto-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950300-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950305-meme-anime-indonesia.jpg',
    'https://cdn-brilio-net.akamaized.net/news/2018/11/19/155181/950304-meme-anime-indonesia.jpg'
]

let a = url[Math.floor(Math.random() * url.length)]
return a;
}

const otakumeme = () => new Promise((resolve, reject) => {
    Random().then(url => {
		resolve({
			url
		})
	}).catch(err => { reject(err) })
})

module.exports = otakumeme;