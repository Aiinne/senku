/*
Base:https://github.com/mbahagus/Rest-API-Node.js
Recode: Takayui
*/

//***********// NODE MODULE \\***********\\
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9531
const dir = process.cwd();
//const bodyParser = require('body-parser')
const logger = require('morgan')
const fs = require('fs')
//const puppeteer = require("puppeteer")
const htmlToText = require('html-to-text')
const cheerio = require('cheerio')
const { default: Axios } = require('axios')
const ytdl = require('ytdl-core')
const tinyurl = require('tinyurl-api')
const scrapeYt = require("scrape-yt")
const canvas1 = require('discord-canvas')
const Canvas = require('canvas')
const Canvacord = require('canvacord')
const stackBlur = require('stackblur-canvas')
const request = require('request')
const creator = 'Takayui'
//const TikTokScraper = require('tiktok-scraper')

const SoundCloud = require('soundcloud-scraper')
const client = new SoundCloud.Client()
//***********// END \\***********\\

const {
	Alkitab,
	animepic,
	Bosan,
	Cuaca,
	Covid,
	caklontong,
	Cekresi,
	Corona,
	detik,
	detiks,
	dewabatch,
	FB,
	ff_comic,
	Gempa,
	Github,
	gimg,
	hoax,
	Hilih,
	IGStalk,
	IG,
	//igstory,
	indoxxi,
	jooxdl,
	JadwalSholat,
	jalantikus,
	KBBI,
	Kusonime,
	komiku,
	kiryuu,
	Lirik,
	mcpedl,
	Manga,
	meme,
	Movie,
	Neonime,
//	Nhonline,
    Nulis,
	Otaku,
	otakumeme,
	Pasangan,
	Pekerjaan,
	Penyakit,
	playstore,
	qotaku,
	Quran,
	Simi,
	Surat,
	somoskudasai,
	Shortlink,
	tebakgambar,
	twitter,
	tiktok,
    Vokal,
	wikis,
	wikihow,
	wallpaper
} = require('./lib')

const { 
	greyscale,
	invert,
	silhouette,
	sepia,
	contrast,
	desaturate,
	distort,
	fishEye,
	pixelize,
	motionBlur,
	hasAlpha,
	drawImageWithTint,
	shortenText,
	wrapText,
	centerImage,
	centerImagePart
 } = require('./lib/Canvas');

const {
	neon_light,
    blackpink,
    sandwrite,
    glitch,
    pornhub,
    avengers,
    marvel,
    blood,
    lion_logo,
    wolf_logo,
    ninja_logo,
    joker_logo,
    thunder,
    blood2,
    neon,
    glitch2,
    glitch3,
    harry_potter,
	devil_text,
	dota,
    graffiti,
    league_of_legends,
    Love_Text,
    glowing_neon,
    flaming,
    wood,
    overwatch,
    pubg,
    cross_fire
} = require('./lib/textmaker');
//const { color } = require('canvacord/src/Canvacord')
//const { dirname } = require('path')

 //const { type } = require('os')

app.use(logger('dev'));
app.use(express.static('client'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

//***********// GENERATED KEY SC \\***********\\

SoundCloud.keygen().then(key => {
    SCKEY = key
})//*/

//***********// END KEY SC \\***********\\

//***********// SOUNDCLOUD API \\***********\\
/**
     * Returns object from the soundcloud WidgetAPI (e.g. passing the URL of a playlist, retuns a playlist object)
     * @param {string} url full SoundCloud URL (e.g. https://soundcloud.com/shelter12kollektiv/dariush-mjs-kassette)
     * @returns {object} object from soundcloud
     */
 async function getJsonFromWidgetAPI(url) {
    try {
        const response = await fetch(
            "https://api-widget.soundcloud.com/resolve?url=" + url + "&format=json&client_id=" + SCKEY
        )
        const data = await response.json()
        return data
}
    catch (e) {
        console.error(e)
    }
}
//***********// END SC API \\***********\\

//***********// START RANDOM \\***********\\
var len = 15
        var arr = '1234567890abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Senku'+'Shinomiya-Senku Chan';
//***********// END RANDOM \\***********\\

/*function sendPDF(filePath, req, res) {
	fs.readFile(filePath, (err, data) => {
		if (err) {
			console.log(err);
			res.send(respon.error)
		} else {
			res.set('Content-Disposition', `attachment; filename="nhpdf.pdf"`)
			res.end();
		}
	});
}*/

function sendpdf(filePath, req, res) {
	fs.readFile(filePath, (error, data) => {
	  if (error) {
		console.log(error);
	  } else {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.writeHead(200, {"Content-Type": "application/pdf"});
		res.write(data);
		res.end();
	  }
	});
  }

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const respon = {
	notquery : {
		status: false,
        creator: `${creator}`,
        message: 'masukan parameter query'
	},
	notlokasi : {
		status: false,
		creator: `${creator}`,
		massage: 'masukan parameter lokasi'
	},
	notcode : {
		status: false,
        creator: `${creator}`,
        message: 'masukan parameter code'
	},
    noturl: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter url'
    },
    noturlorlink: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter url atau link'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter text2'
    },
    notteks: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter teks'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter kata'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter username'
    },
    notsetbg: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter setbg'
    },
    notprofile: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter profile'
    },
    notavatar: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter avatar'
    },
    notimg: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter img'
    },
    notnama: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter nama'
    },
    notgcname: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter gcname'
    },
    notjumblahmem: {
        status: false,
        creator: `${creator}`,
        message: 'masukan parameter jumblahmem'
    },
    notfinduser: {
        status: false,
        creator: `${creator}`,
        message: 'Username Tidak Ditemukan'
    },
    errurl: {
        status: false,
        creator: `${creator}`,
        message: 'Mohon Maaf Url Anda Tidak Valid'
    },
    sukses: {
        status: true,
        creator: `${creator}`,
        message: 'Sukses'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Mohon Maaf Ada Yang Error'
    }
}

app.get('/api', (req, res) => {
	return res.send({
		message : "Ih... Nyasar Maau Ngapain Hayo..."
	})
})

//***********// SCRIPT PANJANG \\***********\\

app.get('/api/fakta-unik', (req, res) => {
	const fakta = fs.readFileSync('./lib/json/faktaunik.json')
	const data = JSON.parse(fakta)
	const acak = data[Math.floor(Math.random() * (data.length))]
	res.send({
		status: true,
		creator: creator,
		result: acak
	})
})

app.get('/api/pantun', (req, res) => {
	const pantun = fs.readFileSync('./lib/json/pantun.json')
	const data = JSON.parse(pantun)
	const acak = data[Math.floor(Math.random() * (data.length))]
	res.send({
		status: true,
		creator: creator,
		result: acak
	})
})

/*
app.get('/api/', (req, res) => {
	//var image = req.query.url
	//if(!image || image == undefined) return res.send(respon.noturl)
	try {
		(async () => {
			
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/', (req, res) => {
	//var  = req.query.
	//if(! ||  == undefined) return res.send(respon.)
})

{ status: false, creator: `${creator}`, message: 'masukan parameter ' }

//*/

app.get('/api/play', async (req, res) => {
	var id = req.query.query
	if(!id || id == undefined) return res.send(respon.notquery)
	try {
		let argssearch = id;
		let results = await scrapeYt.search(argssearch);
		let ytsa = await tinyurl(`http://localhost:9531/api/ytdla?url=https://youtu.be/${results[0].id}`)
		let ytsv = await tinyurl(`http://localhost:9531/api/ytdlv?url=https://youtu.be/${results[0].id}`)
		res.send({
			status: true,
			result:{
			id: results[0].id,
			title: results[0].title,
			duration: results[0].duration,
			thumbnail: results[0].thumbnail,
			upload: results[0].uploadDate,
			views: results[0].viewCount,
			video_url: `https://youtu.be/${results[0].id}`,
			channel_name: results[0].channel.name,
			channel_id: results[0].channel.id,
			channel_url: `https://www.youtube.com/channel/${results[0].channel.id}`,
			yta: ytsa,
			ytv: ytsv
			}
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/ytdla', (req, res) => {
	var id = req.query.url || req.query.link
	if(!id || id == undefined) return res.send(respon.noturl)
    if(id.includes("youtube")){
		urls = id
		var r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
    	r = urls.match(rx)
		id = r[1]
  }
	res.header('Content-Disposition', `attachment; filename="audio.mp3"`)
	ytdl(id, {
      format: 'mp3',
      filter: 'audioonly'
     }).pipe(res)
})

app.get('/api/ytdlv', (req, res) => {
	var id = req.query.url || req.query.link
	if(!id || id == undefined) return res.send(respon.noturl)
  if(id.includes("youtube")){
		urls = id
		var r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
    	r = urls.match(rx)
		id = r[1]
  }
	res.header('Content-Disposition', `attachment; filename="video.mp4"`)
	ytdl(id, {
      format: 'mp4'
     }).pipe(res)
})

app.get('/api/ytdl', (req, res) => {
	(async () => {
    var id = req.query.url || req.query.link
	if(!id || id == undefined) return res.send(respon.noturlorlink)
	var urls = id
	var ytdla = await tinyurl(`http://localhost:9531/api/ytdla?url=${urls}`)
	var ytdlv = await tinyurl(`http://localhost:9531/api/ytdlv?url=${urls}`)
    ytdl.getInfo(urls)
    .then(info => res.send({
			status: true,
			creator: `${creator}`,
			result:{
				id: info.videoDetails.videoId,
				Judul: info.videoDetails.title,
				desc: info.videoDetails.description,
				lengthSeconds: info.videoDetails.lengthSeconds,
				viewCount: info.videoDetails.viewCount,
				publishDate: info.videoDetails.publishDate,
				ChannelName: info.videoDetails.ownerChannelName,
				likes: info.videoDetails.likes,
				dislikes: info.videoDetails.dislikes,
				thumbnails: `https://i.ytimg.com/vi/${info.videoDetails.videoId}/hqdefault.jpg`,
				yta: ytdla,
				ytv: ytdlv,
				keywords: info.videoDetails.keywords
			}
		}))
	})();
})

app.get('/api/canvas/goodbye', (req, res) => {
	var nama = req.query.nama;
	var setbg = req.query.setbg;
	var profile = req.query.profile;
	var gcname = req.query.gcname;
	var jumblahmem = req.query.jumblahmem;
	if(!nama || nama == undefined) return res.send(respon.notnama)
	if(!setbg || setbg == undefined) return res.send(respon.notsetbg)
	if(!profile || profile == undefined) return res.send(respon.notprofile)
	if(!gcname || gcname == undefined) return res.send(respon.notgcname)
	if(!jumblahmem || jumblahmem == undefined) return res.send(respon.notjumblahmem)
	try {
		(async () => {
			const goodbye = await new canvas1.Goodbye()
			.setUsername(nama)//Takayui
			.setDiscriminator('9531')
			.setMemberCount(jumblahmem)//101
			.setGuildName(gcname)//ANIMELOVERS
			.setAvatar(profile)//https://tinyurl.com/2nwscfd6
			.setColor('border', '#00100C')
			.setColor('username-box', '#00100C')
			.setColor('discriminator-box', '#00100C')
			.setColor('message-box', '#00100C')
			.setColor('title', '#00FFFF')
			.setBackground(setbg)//https://tinyurl.com/y49pznab
			.toAttachment()
			fs.writeFileSync('./client/media/GoodBye.png', goodbye.toBuffer())
			res.sendFile(__dirname + '/client/media/GoodBye.png')
		})();
    } catch (e) {
    	res.send(respon.error)
    }
})

app.get('/api/canvas/welcome', (req, res) => {
	var nama = req.query.nama;
	var setbg = req.query.setbg;
	var profile = req.query.profile;
	var gcname = req.query.gcname;
	var jumblahmem = req.query.jumblahmem;
	if(!nama || nama == undefined) return res.send(respon.notnama)
	if(!setbg || setbg == undefined) return res.send(respon.notsetbg)
	if(!profile || profile == undefined) return res.send(respon.notprofile)
	if(!gcname || gcname == undefined) return res.send(respon.notgcname)
	if(!jumblahmem || jumblahmem == undefined) return res.send(respon.notjumblahmem)
	try {
		(async () => {
			const welcomer = await new canvas1.Welcome()
			.setUsername(nama)//Takayui
			.setDiscriminator('9531')
			.setMemberCount(jumblahmem)//101
			.setGuildName(gcname)//ANIMELOVERS
			.setAvatar(profile)//https://tinyurl.com/2nwscfd6
			.setColor('border', '#00100C')
			.setColor('username-box', '#00100C')
			.setColor('discriminator-box', '#00100C')
			.setColor('message-box', '#00100C')
			.setColor('title', '#00FFFF')
			.setBackground(setbg)//https://tinyurl.com/y49pznab
			.toAttachment()
			fs.writeFileSync('./client/media/Welcome.png', welcomer.toBuffer())
			res.sendFile(__dirname + '/client/media/Welcome.png')
	    })();
    } catch (e) {
	    res.send(respon.error)
    }
})

app.get('/api/canvas/welcome-v2', (req, res) => {
	var nama = req.query.nama;
	var profile = req.query.profile;
	var gcname = req.query.gcname;
	if(!nama || nama == undefined) return res.send(respon.notnama)
	if(!profile || profile == undefined) return res.send(respon.notprofile)
	if(!gcname || gcname == undefined) return res.send(respon.notgcname)
	try {
		(async () => {
			const canvas = Canvas.createCanvas(700, 250);
			const ctx = canvas.getContext('2d');
			const background = await Canvas.loadImage('./client/media/background.png');//./src/image/wallpaper.jpg
			ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
			ctx.strokeStyle = '#74037b';
			ctx.strokeRect(0, 0, canvas.width, canvas.height);
			ctx.font = '28px sans-serif';
			ctx.fillStyle = '#ffffff';
			ctx.fillText(`Welcome to ${gcname} Group`, canvas.width / 2.5, canvas.height / 2.5);
			//ctx.font = applyText(canvas, `Tanaka!`);
			ctx.fillStyle = '#ffffff';
			ctx.fillText(`${nama}`, canvas.width / 2.5, canvas.height / 1.8);
			ctx.beginPath();
			ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.clip();
			const avatar = await Canvas.loadImage(profile);
			ctx.drawImage(avatar, 25, 25, 200, 200);
			fs.writeFileSync('./client/media/Welcome_V2.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/Welcome_V2.png')
		})();
    } catch (e) {
    	res.send(respon.error)
    }
})

app.get('/api/canvas/goodbye-v2', (req, res) => {
	var nama = req.query.nama;
	var profile = req.query.profile;
	var gcname = req.query.gcname;
	if(!nama || nama == undefined) return res.send(respon.notnama)
	if(!profile || profile == undefined) return res.send(respon.notprofile)
	if(!gcname || gcname == undefined) return res.send(respon.notgcname)
	try {
		(async () => {
			const canvas = Canvas.createCanvas(700, 250);
			const ctx = canvas.getContext('2d');
			const background = await Canvas.loadImage('./client/media/background.png');//./src/image/wallpaper.jpg
			ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
			ctx.strokeStyle = '#74037b';
			ctx.strokeRect(0, 0, canvas.width, canvas.height);
			ctx.font = '28px sans-serif';
			ctx.fillStyle = '#ffffff';
			ctx.fillText(`Sayonara ~`, canvas.width / 2.5, canvas.height / 2.5);
			//ctx.font = applyText(canvas, `Tanaka!`);
			ctx.fillStyle = '#ffffff';
			ctx.fillText(`${nama}`, canvas.width / 2.5, canvas.height / 1.8);
			ctx.beginPath();
			ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.clip();
			const avatar = await Canvas.loadImage(profile);
			ctx.drawImage(avatar, 25, 25, 200, 200);
			fs.writeFileSync('./client/media/GoodBye_V2.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/GoodBye_V2.png')
		})();
    } catch (e) {
    	res.send(respon.error)
    }
})

app.get('/api/circle', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		(async () => {
			const data = await Canvas.loadImage(image);
			const dimensions = data.width <= data.height ? data.width : data.height;
			const canvas = Canvas.createCanvas(dimensions, dimensions);
			const ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, Math.PI * 2);
			ctx.closePath();
			ctx.clip();
			ctx.drawImage(data, (canvas.width / 2) - (data.width / 2), (canvas.height / 2) - (data.height / 2));
			fs.writeFileSync('./client/media/circle.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/circle.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/glitch', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		(async () => {
			const data = await Canvas.loadImage(image);
			const canvas = Canvas.createCanvas(data.width, data.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(data, 0, 0);
			distort(ctx, 20, 0, 0, data.width, data.height, 5);
			fs.writeFileSync('./client/media/glitch.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/glitch.png')
			//const attachment = canvas.toBuffer();
			//if (Buffer.byteLength(attachment) > 8e+6) return msg.reply('Resulting image was above 8 MB.');
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/miror', (req, res) => {
	var image = req.query.img
	var type = req.query.type
	if(!image || image == undefined) return res.send(respon.notimg)
	if(!type) return res.send({ status: false, creator: `${creator}`, massage: 'masukan parameter type' })
	if (type != 'x' && type != 'y' && type != 'both') return res.send({ status: false, creator: `${creator}`, message: 'type tidak tersedia, type yang tersedia hanya x, y, dan both silahkan pilih salah satunya' })
	try {
		(async () => {
			const data = await Canvas.loadImage(image);
			const canvas = Canvas.createCanvas(data.width, data.height);
			const ctx = canvas.getContext('2d');
			if (type === 'x') {
				ctx.translate(canvas.width, 0);
				ctx.scale(-1, 1);
			} else if (type === 'y') {
				ctx.translate(0, canvas.height);
				ctx.scale(1, -1);
			} else if (type === 'both') {
				ctx.translate(canvas.width, canvas.height);
				ctx.scale(-1, -1);
			}
			ctx.drawImage(data, 0, 0);
			fs.writeFileSync('./client/media/miror.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/miror.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/spotify', (req, res) => {
	var image = req.query.img
	var judul = req.query.judul
	var artis = req.query.artis
	if(!image || image == undefined) return res.send(respon.notimg)
	if(!judul || judul == undefined) return res.send({ status: false, creator: `${creator}`, massage: 'masukan parameter judul' })
	if(!artis || artis == undefined) return res.send({ status: false, creator: `${creator}`, massage: 'masukan parameter artis' })
	try {
		(async () => {
			const base = await Canvas.loadImage('./client/media/spotify-now-playing.png');
			const data = await Canvas.loadImage(image);
			const canvas = Canvas.createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, base.width, base.height);
			const height = 504 / data.width;
			ctx.drawImage(data, 66, 132, 504, height * data.height);
			ctx.drawImage(base, 0, 0);
			ctx.textBaseline = 'top';
			ctx.textAlign = 'center';
			ctx.font = "25px Noto-Sans";
			ctx.fillStyle = 'white';
			ctx.fillText(judul, base.width / 2, 685);
			ctx.fillStyle = '#bdbec2';
			ctx.font = "17px Manrope";
			ctx.fillText(artis, base.width / 2, 720);
			ctx.font = "15px Manrope";
			ctx.fillText('Chillax\'s Picks', base.width / 2, 65);
			fs.writeFileSync('./client/media/spotify.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/spotify.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/idea', (req, res) => {
	var text = req.query.text
	if(!text || text == undefined) return res.send(respon.nottext)
	try {
		(async () => {
			Canvas.registerFont("./client/media/fonts/myFont.ttf", { family: "myFont" })
			const base = await Canvas.loadImage('./client/media/chi-idea.png');
			const canvas = Canvas.createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			ctx.textAlign = 'center';
			ctx.textBaseline = 'top';
			ctx.font = "15px 'myFont'";
			const fontSize = 15;
			while (ctx.measureText(text).width > 500) {
				fontSize--;
				ctx.font = "15px 'myFont'";
			}
			const lines = await wrapText(ctx, text, 83);
			const topMost = 137 - (((fontSize * lines.length) / 2) + ((5 * (lines.length - 1)) / 2));
			for (let i = 0; i < lines.length; i++) {
				const height = topMost + ((fontSize + 5) * i);
				ctx.fillText(lines[i], 70, height);
			}
			fs.writeFileSync('./client/media/idea.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/idea.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/karen-have', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		(async () => {
			const base = await Canvas.loadImage('./client/media/look-what-karen-have.png');
			const data = await Canvas.loadImage(image);
			const canvas = Canvas.createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, base.width, base.height);
			ctx.rotate(-6.5 * (Math.PI / 180));
			const { x, y, width, height } = centerImagePart(data, 512, 512, 514, 50);
			ctx.drawImage(data, x, y, width, height);
			ctx.rotate(6.5 * (Math.PI / 180));
			ctx.drawImage(base, 0, 0);
			fs.writeFileSync('./client/media/what-karen-have.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/what-karen-have.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/blur', (req, res) => {
	var image = req.query.img
	var radius = req.query.radius
	if(!image || image == undefined) return res.send(respon.notimg)
	if(!radius || radius == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter radius' })
	if(isNaN(Number(radius))) return res.send({ status: false, creator: `${creator}`, massage: "radius Harus Berupa Angka" })
	if(radius > '180') return res.send({ status: false, creator: `${creator}`, message: 'Maximal 180 radius' })
	try {
		(async () => {
			const data = await Canvas.loadImage('./client/media/test.png')
			const canvas = Canvas.createCanvas(data.width, data.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(data, 0, 0);
			stackBlur.canvasRGBA(canvas, 0, 0, canvas.width, canvas.height, radius)
			fs.writeFileSync('./client/media/blur.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/blur.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/hitler', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		(async () => {
			const base = await Canvas.loadImage('./client/media/worse-than-hitler.png');
			const avatar = await Canvas.loadImage(image);
			const canvas = Canvas.createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			ctx.drawImage(avatar, 47, 42, 140, 140);
			fs.writeFileSync('./client/media/hitler.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/hitler.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/trigered', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.trigger(image)
		.then(triggered => {
			Canvacord.write(triggered, "./client/media/triggered.gif");
			res.sendFile(__dirname + '/client/media/triggered.gif')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/trash', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.trash(image)
		.then(sampah => {
			Canvacord.write(sampah, "./client/media/sampah.png");
			res.sendFile(__dirname + '/client/media/sampah.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/affect', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.affect(image)
		.then(affect => {
			Canvacord.write(affect, "./client/media/affect.png");
			res.sendFile(__dirname + '/client/media/affect.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/threshold', (req, res) => {
	var image = req.query.img
	var amount = req.query.amount
	if(!image || image == undefined) return res.send(respon.notimg)
	if(!amount || amount == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter amount' })
	if (isNaN(Number(amount))) return res.send({ status: false, creator: `${creator}`, massage: "amount Harus Berupa Angka" })
	if(amount < '50') return res.send({ status: false, creator: `${creator}`, message: 'Minimal 50 amount' })
	try {
		Canvacord.Canvas.threshold(image, amount)
		.then(threshold => {
			Canvacord.write(threshold, "./client/media/threshold.png");
			res.sendFile(__dirname + '/client/media/threshold.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/spank', (req, res) => {
	var image1 = req.query.img1
	var image2 = req.query.img2
	if(!image1 || image1 == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter img1' })
	if(!image2 || image2 == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter img2' })
	try {
		Canvacord.Canvas.spank(image1, image2)
		.then( spank => {
			Canvacord.write(spank, "./client/media/spank.png");
			res.sendFile(__dirname + '/client/media/spank.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/slap', (req, res) => {
	var image1 = req.query.img1
	var image2 = req.query.img2
	if(!image1 || image1 == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter img1' })
	if(!image2 || image2 == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter img2' })
	try {
		Canvacord.Canvas.slap(image1, image2)
		.then( slap => {
			Canvacord.write(slap, "./client/media/slap.png");
			res.sendFile(__dirname + '/client/media/slap.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/rip', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.rip(image)
		.then( rip => {
			Canvacord.write(rip, "./client/media/rip.png");
			res.sendFile(__dirname + '/client/media/rip.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/rainbow', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.rainbow(image)
		.then( rain => {
			Canvacord.write(rain, "./client/media/pelangi.png");
			res.sendFile(__dirname + '/client/media/pelangi.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/opinion', (req, res) => {
	var image = req.query.img
	var text = req.query.text
	if(!image || image == undefined) return res.send(respon.notimg)
	if(!text || text == undefined) return res.send(respon.nottext)
	try {
		Canvacord.Canvas.opinion(image, text)
		.then(opin => {
			Canvacord.write(opin, "./client/media/opinion.png");
			res.sendFile(__dirname + '/client/media/opinion.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/kiss', (req, res) => {
	var image1 = req.query.img1
	var image2 = req.query.img2
	if(!image1 || image1 == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter img1' })
	if(!image2 || image2 == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter img2' })
	try {
		Canvacord.Canvas.kiss(image1, image2)
		.then(kiss => {
			Canvacord.write(kiss, "./client/media/cium.png");
			res.sendFile(__dirname + '/client/media/cium.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/jail', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.jail(image)
		.then(jail => {
			Canvacord.write(jail, "./client/media/penjara.png");
			res.sendFile(__dirname + '/client/media/penjara.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/invert', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.invert(image)
		.then(inv => {
			Canvacord.write(inv, "./client/media/invert.png");
			res.sendFile(__dirname + '/client/media/invert.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/delete', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.delete(image, false)
		.then(del => {
			Canvacord.write(del, "./client/media/delete.png");
			res.sendFile(__dirname + '/client/media/delete.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/wasted', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		Canvacord.Canvas.wasted(image)
		.then(wastedd => {
			Canvacord.write(wastedd, "./client/media/wasted.png");
			res.sendFile(__dirname + '/client/media/wasted.png')
		})
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/phub', (req, res) => {
	var avatar = req.query.avatar
	var comment = req.query.comment
	var name = req.query.username
	if(!avatar || avatar == undefined) return res.send(respon.notavatar)
	if(!comment || comment == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter comment' })
	if(!name || name == undefined) return res.send(respon.notusername)
	try {
		(async () => {
			let image = await Canvacord.Canvas.phub(options = { username: name, message: comment, image: avatar })
			Canvacord.write(image, "./client/media/phub.png");
			res.sendFile(__dirname + "/client/media/phub.png")
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/ytcomment', (req, res) => {
	var avatar = req.query.avatar
	var comment = req.query.comment
	var name = req.query.username
	if(!avatar || avatar == undefined) return res.send(respon.notavatar)
	if(!comment || comment == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter comment' })
	if(!name || name == undefined) return res.send(respon.notusername)
	try {
		(async () => {
			let image = await Canvacord.Canvas.youtube(ops = { username: name, content: comment, avatar: avatar , dark: true })
			Canvacord.write(image, "./client/media/ytcomment.png");
			res.sendFile(__dirname + "/client/media/ytcomment.png")
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/wanted', (req, res) => {
	var image = req.query.img
	if(!image || image == undefined) return res.send(respon.notimg)
	try {
		(async () => {
			const base = await Canvas.loadImage('./client/media/wanted.png');
			const data = await Canvas.loadImage(image);
			const canvas = Canvas.createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			const { x, y, width, height } = centerImagePart(data, 430, 430, 150, 360);
			ctx.drawImage(data, x, y, width, height);
			sepia(ctx, x, y, width, height);
			fs.writeFileSync('./client/media/Dicari.png', canvas.toBuffer())
			res.sendFile(__dirname + '/client/media/Dicari.png')
		})();
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/mangatoon', (req, res) => {
	var judul = req.query.judul
	if(!judul || judul  == undefined) return res.send({ status: false, creator: `${creator}`, message: 'masukan parameter judul' })
	try {
		(async () => {
		const link = await Axios.get(`https://mangatoon.mobi/id/search?word=${judul}`) 
		const c = cheerio.load(link.data)
		let id = c('#page-content').find('div.search-page > div > div.comics-result > div.recommended-wrap > div > div > a').attr('href') || 'undefined'
		Axios.get(`https://mangatoon.mobi${id}`)
		.then(({ data }) => {
		const $ = cheerio.load(data)
		var judul = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-title-bg > span').text().trim()
		var genre = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-tags-info > span').text().trim()
		var author = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-author-name > span').text().trim()
		var thumb = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-img > img.big-img').attr('src');
		var LinkKe = $('#page-content').find('div.detail-wrap > div.detail-interact > a').attr('href')
		var Link = `https://mangatoon.mobi${LinkKe}`
		let Author = author.replace('Nama Author: ', '');
		let hasil = {
			judul, thumb, genre, Author, Link
		}
		res.send(hasil)
    })
	    })()
	} catch (err) {
		console.log(err)
		res.send(respon.error)
	}
})

app.get('/api/artinama', async (req, res) => {
	var nama = req.query.nama
	if(!nama || nama == undefined)
	return res.send({
		status: false,
		message : "Masukkan parameter nama"
	})
	try {
		let name = nama
		Axios.get(`https://www.primbon.com/arti_nama.php?nama1=${name}&proses=+Submit%21+`)
		.then(({ data }) => {
			 const $ = cheerio.load(data)
			 const result = $('#body').text().split('Nama:')[0].replace(/ARTI NAMA|\n/gi, '')
		res.json({
			status: true,
			result:{
				result
	   		    }
		    })
	    })
	} catch (err) {
		res.send(respon.error)
	}
})

app.get('/api/artimimpi', async (req, res) => {
	var query = req.query.query
	if(!query || query == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter query"
	})
	let katakunci = query
	Axios.get('https://www.primbon.com/tafsir_mimpi.php?mimpi=' + katakunci + '&submit=+Submit+')
    .then(({ data }) => {
        const $ = cheerio.load(data)
        const detect = $('#body > font > i').text()
        const isAva = /Tidak ditemukan/g.test(detect) ? false : true
        if (isAva) {
            const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${katakunci}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi,'\n')
            res.json({
                status: true,
				creator: `${creator}`,
                result: isi
			})
		} else {
			res.send ({
				status: false,
				creator: `${creator}`,
				result: `Data tidak ditemukan! Gunakan kata kunci.`
			})
		}
	})
})

app.get('/api/scdlmp3', (req, res) => {
    client.getSongInfo(req.query.url)
        .then(async (song) => {
            const stream = await song.downloadProgressive()
            res.set('content-disposition', `attachment filename="${song.title}.mp3"`)
            stream.pipe(res)
        })
        .catch(console.error)
})

app.get('/api/scstalk', (req, res) => {
	let name = req.query.username
	if(!name || name == undefined) return res.send(respon.notusername)
	client.getUser(name)
	.then(async (playlist) => {
            res.json({
				status: true,
				creator: `${creator}`,
				result:{
					username: playlist.username,
					name: playlist.name,
					created: playlist.createdAt,
					followers: playlist.followers,
					following: playlist.following,
					likesCount: playlist.likesCount,
					tracksCount: playlist.tracksCount,
					verified: playlist.verified,
					avatar: playlist.avatarURL,
					banner: playlist.bannerURL,
					link: playlist.profile
				}
			})
        })
		.catch(err => {
			res.send(respon.notfinduser)
	})
})

/*app.get('/api/nekopoi', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	var url = "http://209.126.6.6/?s="+ query;
	request.get({headers: {'content-type' : 'application/x-www-form-urlencoded'}, url: url, },
	function(error, response, body){
		if (error) {
			console.error('Someting Error');
			return res.send({
				status: false,
				creator: `${creator}`,
				massage: "Maaf query Seperti Itu Tidak Ada Di Database"
			})
		}
		let $ = cheerio.load(body);
		let neko = [];
		$('div[class="listupd"] > article > div > a').each(function (i, e) {
			neko[i] = $(this).attr("href")
		})
		var Nekolink = Math.floor(Math.random() * neko.length);
		var url = neko[Nekolink];
        request.get({
            headers: {'content-type' : 'application/x-www-form-urlencoded'},
            url: url
        },
		function(error, response, body){
			if (error) {
				console.error('Someting Error');
				return res.send({
					status: false,
					creator: `${creator}`,
					massage: "Maaf query Seperti Itu Tidak Ada Di Database"
				})
			}
			let $ = cheerio.load(body);
			let poi = []
			$('div[class="eplister"] > ul > li > a').each(function (i, e) {
				poi[i] = $(this).attr("href")
			})
			var Poilink = Math.floor(Math.random() * poi.length);
			var url = poi[Poilink];
			request.get({
            	headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url: url
            },
			async function(error, response, body){
				if (error) {
					res.send({
						status: false,
						creator: `${creator}`,
						massage: "Maaf query Seperti Itu Tidak Ada Di Database"
					})
				}
				let $ = cheerio.load(body);
				const title = $('h1[class="entry-title"]').text()
				const jptitle = $('span[class="alter"]').text()
				const released = $('span[class="updated"]').text()
				const rating = $('div[class="rating"] > strong').text()
				const gendre = $('div[class="genxed"]').text()
				const gambar = htmlToText.fromString($('div[class="thumb"] > img').attr('src'), {
					noLinkBrackets: true,
					ignoreHref: true,
					ignoreImage:true
				})
				const link = htmlToText.fromString($('div[class="player-embed"] > iframe').attr('src'), {
					noLinkBrackets: true,
					ignoreHref: true,
					ignoreImage:true
				})
				var Link_Nonton = await tinyurl(link)
				fetch(encodeURI(`https://api.imgbb.com/1/upload?key=28dd175b555860ab2b5cdfedf125fe38&image=${gambar}&name=${randomTextNumber}`))
					.then(response => response.json())
					.then(data => {
					var image = data.data.url
					res.json({
						title,
						jptitle,
						rating,
						gendre,
						released,
						image,
						Link_Nonton
					})
				})
			})
		})
	})
})*/

app.get("/api/cerpen", (req, res, next) => {
function foreach(arr, func){
    for(var i in arr){
    func(i, arr[i]);
  }
}
var items = ["cerpen-jepang", "cerpen-cinta" ,"cerpen-cinta-dalam-hati-terpendam","cerpen-cinta-islami"];
var kategori =  items[Math.floor(Math.random() * items.length)];
var hal = Math.floor(Math.random() * 30)
var url = "http://cerpenmu.com/category/"+ kategori +"/page/"+ hal;
    request.get({
                headers: {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'},
                url: url,
            },
function(error, response, body){
    let $ = cheerio.load(body)
    //var bodi = body.replace("}1", "}");
    //var d = JSON.parse(bodi);
    let cerpen = [];
    $('article[class="post"] > h2 > a').each(function (i, e) {
        cerpen[i] = $(this).attr("href")
    })
    var nomorlink = Math.floor(Math.random() * 10);
    var url = cerpen[nomorlink];
        request.get({
                    headers: {'content-type' : 'application/x-www-form-urlencoded'},
                    url: url
                },
function(error, response, body){
    let $ = cheerio.load(body);
    //var h  = $.html().replace(/<[^>]*>?/gm, '');
    const text = htmlToText.fromString($.html(), {
    noLinkBrackets: true,
    ignoreHref: true,
    ignoreImage:true
    })
	const isicerpennye = text.split("kamu dapat")[0].split("Kontak Kami")[1]
        res.json({
			status: true,
			creator: `${creator}`,
			result: {
				ceritanya: isicerpennye
			}
		    })
        })
    })
})

app.get("/api/cersex", (req, res, next) => {
function foreach(arr, func){
    for(var i in arr){
    func(i, arr[i]);
  }
}
var items = ["cerita-dewasa-perawan", "cerita-dewasa-abg" ,"cerita-dewasa-selingkuh","cerita-dewasa-tante"];
var kategori =  items[Math.floor(Math.random() * items.length)];
var hal = Math.floor(Math.random() * 5)
var url = "http://162.213.249.120/category/"+ kategori +"/page/"+ hal;
    request.get({
                headers: {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'},
                url: url,
            },
function(error, response, body){
    let $ = cheerio.load(body)
    //var bodi = body.replace("}1", "}");
    //var d = JSON.parse(bodi);
    let cerpen = [];
    $('a[class="sticky-tag"]').each(function (i, e) {
        cerpen[i] = $(this).attr("href")
    })
    var nomorlink = Math.floor(Math.random() * 10);
    var url = cerpen[nomorlink];
        request.get({
                    headers: {'content-type' : 'application/x-www-form-urlencoded'},
                    url: url
                },
function(error, response, body){
    let $ = cheerio.load(body);
	const title = $('h1[class="post-title"]').text()
	const image = htmlToText.fromString($('figure[class="post-image"] > img').attr('src'), {
	noLinkBrackets: true,
	ignoreHref: true,
	ignoreImage:true
	})
	const post = $('span[class="post-meta-date"]').text().replace(/on /gi, '')
	const category = $('p[class="post-categories"]').text()
    const text = htmlToText.fromString($('div[class="post-content entry-content"]').html(), {
    noLinkBrackets: true,
    ignoreHref: true,
    ignoreImage:true
    })
	const result = text
        res.json({
			status: true,
			creator: `${creator}`,
			title,
			image,
			post,
			category,
			result
		    })
        })
    })
})

app.get('/api/scdl', (req, res) => {
	let url = req.query.url
	if(!url || url == undefined) return res.send(noturl)
	if (!/soundcloud.com/g.test(url)) return res.send(respon.errurl)
    getJsonFromWidgetAPI(url)
	.then(async (song) => {
        res.json({
			status: true,
			creator: `${creator}`,
			result:{
				title: song.title,
				duration: song.duration,
				likesCount: song.likes_count,
				publishDate: song.created_at,
				last_modified: song.last_modified,
				image: song.artwork_url,
				link: song.permalink_url,
				download: 'http://localhost:9531/api/scdlmp3?url=' + song.permalink_url,
				desc: song.description
			}
		})
    })
	.catch(err => {
		res.send(respon.error)
    })
})

app.get('/api/infonpm', async (req, res, next) => {
	var query = req.query.query
	if(!query || query == undefined) return res.send(respon.notquery)
    fetch(encodeURI(`https://registry.npmjs.org/${query}`))
	    .then(response => response.json())
	    .then(data => {
	        var result = data;
		    res.json({
			    status : true,
			    creator : `${creator}`,
			    result
		    })
	    })
	.catch(e => {
		res.json(respon.error)
    })
})

//***********// SCRIPT PENDEK \\***********\\

app.get('/api/twitter', (req, res) => {
	var a = req.query.url
	twitter(a).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

/*app.get('/api/igstory', (req, res) => {
	var a = req.query.username
	igstory(a).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})*/

app.get('/api/wallpaper', (req, res) => {
	var a = req.query.search
	wallpaper(a).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/playstore', (req, res) => {
	var a = req.query.search
	playstore(a).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/alkitab', (req, res) => {
	var a = req.query.name
	var chapter = req.query.chapter
	var number = req.query.number
	var pasal = a.toString().toLowerCase()
	Alkitab(pasal, chapter, number).then(ress => {
		res.send({ status: true, creator: creator, ress })
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/anime-pic', (req, res) => {
	var gendre = req.query.gendre
	animepic(gendre).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/bosan', (req, res) => {
	Bosan().then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/kusonime', (req, res) => {
	var search = req.query.search
	Kusonime(search).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/manga', (req, res) => {
	var search = req.query.keyword
	keyword(search).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/meme', (req, res) => {
	meme().then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/movie', (req, res) => {
	var s = req.query.search
	movie(s).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/neonime', (req, res) => {
	var s = req.query.search
	Neonime(s).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/pasangan', (req, res) => {
	var n1 = req.query.nama1
	var n2 = req.query.nama2
	Pasangan(n1, n2).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/pekerjaan', (req, res) => {
	var tgl = req.query.tanggal
	Pekerjaan(tgl).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/penyakit', (req, res) => {
	var tgl = req.query.tanggal
	Penyakit(tgl).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/quran', (req, res) => {
	Quran().then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/surat', (req, res) => {
	var a = req.query.surat
	var b = req.query.ayat
	Surat(a, b).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/jadwal-sholat', (req, res) => {
	var a = req.query.kota
	JadwalSholat(a).then(res => {
		res.send({ status: true, creator: creator, res })
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/lirik', (req, res) => {
	var search = req.query.search
	Lirik(search).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/textprolist', async (req, res) => {
	res.send({
		list_theme: "neon-light, blackpink, sandwrite, glitch, pornhub, avengers, marvel, blood, lion-logo, wolf-logo, ninja-logo, joker-logo, thunder, blood2, neon, glitch2, glitch3, harry-potter, devil-text"
	})
})

app.get('/api/textpro', async (req, res) => {
	var text = req.query.text
	var text2 = req.query.text2
	var theme = req.query.theme
	if (!theme) return res.json({ status: false, creator: `${creator}`, message: 'masukan parameter theme' })
	if ( theme != 'neon-light' && 
	     theme != 'blackpink' && 
		 theme != 'sandwrite' && 
		 theme != 'glitch' && 
		 theme != 'pornhub' && 
		 theme != 'avengers' && 
		 theme != 'marvel' && 
		 theme != 'blood' && 
		 theme != 'lion-logo' && 
		 theme != 'wolf-logo' && 
		 theme != 'ninja-logo' &&
		 theme != 'joker-logo' &&
		 theme != 'thunder' &&
		 theme != 'blood2' &&
		 theme != 'neon' &&
		 theme != 'glitch2' &&
		 theme != 'glitch3' &&
		 theme != 'harry-potter' &&
		 theme != 'devil-text') return res.send({ status: false, creator: `${creator}`, message: 'theme tidak tersedia silahkan liat di /textprolist untuk melihat theme yang tersedia' })
		if(!text || text == undefined) return res.send(respon.nottext)
		if (theme == 'neon-light') {
			neon_light(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'blackpink') {
			blackpink(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'sandwrite') {
			sandwrite(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'glitch') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			glitch(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'pornhub') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			pornhub(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'avengers') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			avengers(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'marvel') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			marvel(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'blood') {
			blood(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'lion-logo') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			lion_logo(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'wolf-logo') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			wolf_logo(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'ninja-logo') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			ninja_logo(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'joker-logo') {
			joker_logo(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'thunder') {
			thunder(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'blood2') {
			blood2(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'neon') {
			neon(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
	    } else if (theme == 'glitch2') {
			glitch2(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'glitch3') {
			if(!text2 || text2 == undefined) return res.send(respon.nottext2)
			glitch3(text, text2).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'harry-potter') {
			harry_potter(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err);
			})
		} else if (theme == 'harry-potter') {
			devil_text(text).then(data => {
				res.send(data);
			}).catch(err => {
				res.send(err)
			})
		}
})

app.get('/api/photooxylist', (req, res) => {
	res.send({
		list_theme: 'dota , graffiti, league-of-legends, love-text, glowing-neon, flaming, wood, overwatch, pubg, cross-fire'
	})
})

app.get('/api/photooxy', (req, res) => {
	var text = req.query.text
	var text2 = req.query.text2
	var theme = req.query.theme
	if (!theme) return res.json({ status: false, creator: `${creator}`, message: 'masukan parameter theme' })
	if (theme != 'dota' && theme != 'graffiti' && theme != 'league-of-legends' && theme != 'love-text' && theme != 'glowing-neon' && theme != 'flaming' && theme != 'wood' && theme != 'overwatch' && theme != 'pubg' && theme != 'cross-fire') return res.send({ status: false, creator: `${creator}`, message: 'theme tidak tersedia silahkan liat di /photooxylist untuk melihat theme yang tersedia' })
	if(!text || text == undefined) return res.send(respon.nottext)
	if (theme == 'dota') {
		dota(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'graffiti') {
		graffiti(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'league-of-legends') {
		league_of_legends(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'love-text') {
		Love_Text(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'glowing-neon') {
		glowing_neon(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'flaming') {
		flaming(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'wood') {
		wood(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'overwatch') {
		overwatch(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'pubg') {
		if(!text2 || text2 == undefined) return res.send(respon.nottext2)
		pubg(text, text2).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	} else if (theme == 'cross-fire') {
		cross_fire(text).then(data => {
			res.send(data);
		}).catch(err => {
			res.send(err)
		})
	}
})

app.get('/api/mcpedl', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	mcpedl(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/indoxxi', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	indoxxi(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/somoskudasai', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	somoskudasai(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/kiryuu', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	kiryuu(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/komiku', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	komiku(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/jalantikus', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	jalantikus(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/detiks', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	detiks(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/wikis', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	wikis(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/dewabatch', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	dewabatch(query).then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/ff-comic', (req, res) => {
	ff_comic().then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/detik', (req, res) => {
	detik().then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/wikihow', (req, res) => {
	wikihow().then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/berita-hoax', (req, res) => {
	hoax().then(url => {
	    res.send(url);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/api/joox', (req, res) => {
	var cari = req.query.query
	if(!cari || cari == undefined) return res.send(respon.notquery)
	jooxdl(cari)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/igs', (req, res) => {
	var url = req.query.u || req.query.username
	if(!url || url == undefined) return res.send(respon.notusername)
	IGStalk(url)
	.then(data => {
		res.send(data)
	}).catch(err => {
		console.log(err)
		res.send(respon.notfinduser)
	})
})

app.get('/api/kbbi', (req, res) => {
	const text = req.query.text
	if(!text || text == undefined)
	  return res.send(respon.nottext)
	KBBI(text)
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send(err)
		})
})

app.get('/api/lirik', (req, res) => {
	const query = req.query.query
	if(!query || query == undefined)
	return res.send(respon.notquery)
	Lirik(query)
	.then(data => {
		res.send(data)
		})
	.catch(err  => {
		res.send(err)
	})
})

app.get('/api/cuaca', (req, res) => {
	var lokasi = req.query.lokasi
	if(!lokasi || lokasi == undefined) return res.send(respon.notlokasi)
	Cuaca(lokasi)
		.then(data => {
			res.send(data)
		}).catch(err => {
		res.send(err)
	})
})

app.get('/api/otakudesu', (req, res) => {
	var cari = req.query.query
	if(!cari || cari == undefined) return res.send(respon.notquery)
	Otaku(cari)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/corona', (req, res) => {
	var cari = req.query.query
	if(!cari || cari == undefined) return res.send(respon.notquery)
	Corona(cari)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/ig', (req, res) => {
	var url = req.query.url || req.query.link
	if(!url || url == undefined) return res.send(respon.noturlorlink)
	IG(url)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/fb', (req,res) => {
	var url = req.query.url || req.query.link
	if(!url || url == undefined) return res.send(respon.noturlorlink)
	FB(url)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

/*app.get('/api/tiktoks', async (req, res, next) => {
	var username = req.query.username
	if(!username || username == undefined) return res.send(respon.notusername)
    TikTokScraper.getUserProfileInfo(username)
	.then(users => {
		//console.log(user)
        res.send({
            status : true,
            creator : `${creator}`,
            result : {
				uniqueId: users.user.uniqueId,
				nickname: users.user.nickname,
				followers: users.stats.followerCount,
				following: users.stats.followingCount,
				heart: users.stats.heartCount,
				video: users.stats.videoCount,
				avatarLarger: users.user.avatarLarger,
				avatarMedium: users.user.avatarMedium,
				avatarThumb: users.user.avatarThumb,
			}
        })
    })
    .catch(e => {
		console.log(e)
        res.send(respon.notfinduser)
    })
})*/

app.get('/api/tiktok', (req, res) => {
	var link = req.query.url
	if(!link || link == undefined) return res.send(respon.noturl)
	tiktok(link).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/vokal', (req, res) => {
    const vokal = req.query.vokal
    const teks = req.query.teks
    if (!vokal && !teks) {
      res.send(respon.nottext)
    } else {
      Vokal(vokal, teks)
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/covid', (req, res) => {
	var la = req.query.la;
	var lo = req.query.lo;
	if( !la || !lo || la == undefined || lo == undefined)
		return res.status(400)
    .send({
			status : 400,
			message : "Masukkan parameter la dan lo"
		})
	Covid(la, lo)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.send(err);
		})
})

app.get('/api/simi', (req, res) => {
    const teks = req.query.teks || req.query.text
    if (!teks) {
      res.send(respon.nottext)
    } else {
      Simi(teks)
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/github', (req, res) => {
    const username = req.query.username || req.query.u
    if (!username) {
      res.send(respon.notusername)
    } else {
      Github(username)
      	.then(data => {
          res.send(data)
        }).catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/shortlink', (req, res) => {
	const url = req.query.url || req.query.link;
	if(!url || url == undefined)
	return res.send(respon.noturlorlink)
	Shortlink(url)
			.then(ress => {
				res.send(ress)
			})
			.catch(err => {
				res.send(err)
			})
})

app.get('/api/nulis', (req, res) => {
    const kata = req.query.kata
    if (!kata) {
      res.send(respon.notkata)
    } else {
        Nulis(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

app.get('/api/hilih', (req, res) => {
    const kata = req.query.kata
    if (!kata) {
      res.send(respon.notkata)
    } else {
        Hilih(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

app.get('/api/cekresi', (req, res) => {
	var ekspedisi = req.query.eks;
	var no = req.query.no;
	if(!ekspedisi || ekspedisi == undefined)
		return res.send({
			status: false,
			creator: `${creator}`,
			message : 'eks params not found'
		})
	if(!no || no == undefined)
		return res.send({
			status: false,
			creator: `${creator}`,
			message : "no params not found"
		})
	Cekresi(ekspedisi, no)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.send(err)
	})
})

app.get('/api/gimgs', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined) return res.send(respon.notquery)
	gimg(query)
		 .then(url => {
	     res.send(url);
	 })
	 .catch(err => {
		res.send(err);
	})
})

app.get('/api/otakumeme', (req, res) => {
	otakumeme()
	.then(url => {
		res.send(url)
	})
	.catch(err => {
		res.send(err);
	})
})

app.get('/api/qanime', (req, res) => {
	qotaku()
	.then(url => {
		res.send(url)
	})
	.catch(err => {
		res.send(err);
	})
})

app.get('/api/tebakgambar', (req, res) => {
	tebakgambar()
	.then(url => {
		res.send(url)
	})
	.catch(err => {
		res.send(err);
	})
})

app.get('/api/caklontong', (req, res) => {
	caklontong()
	.then(url => {
		res.send(url)
	})
	.catch(err => {
		res.send(err);
	})
})

/*app.get('/api/waifu', (req, res) => {
	const num = Math.floor(Math.random() * 100000);
	res.send({
		status: true,
		creator: `${creator}`,
		result: `https://www.thiswaifudoesnotexist.net/example-${num}.jpg`
	})
})//*/

app.get('/api/gempa', (req, res) => {
	Gempa().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
})

app.get('/docs', (req, res) => {
    res.sendFile(dir + "/client/home.html")
})

app.get('/login', (req, res) => {
    res.sendFile(dir + "/client/login.html")
})

app.use(function (req, res, next) {
	res.status(404).set("Content-Type", "text/html")
	.sendFile(__dirname + "/client/404.html");
});

app.set('json spaces', 4)
app.listen(PORT, () => console.log(`server running on port ${PORT}`))