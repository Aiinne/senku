const fetch = require('node-fetch')

async function Random() {
    let c;
	let result = [
        {
          image: "https://i.ibb.co/5LzqmFk/10.png",
          jawaban: "Tuang air"
        },
        {
          image: "https://i.ibb.co/gDFScLx/18.png",
          jawaban: "Satu jalan"
        },
        {
          image: "*https://i.ibb.co/S3Kh5rM/4.png",
          jawaban: "Iga bakar"
        },
        {
          image: "https://i.ibb.co/176M7bS/19.png",
          jawaban: "Aku sayang ayah"
        },
        {
          image: "https://i.ibb.co/9pfLHRN/image.png",
          jawaban: "Jambu batu"
        },
        {
          image: "https://i.ibb.co/Ms8WVJq/13.png",
          jawaban: "Tantangan seru"
        },
        {
          image: "https://i.ibb.co/1KBtyhp/11.png",
          jawaban: "Alas kaki"
        },
        {
          image: "https://i.ibb.co/WpQGhHm/5.png",
          jawaban: "Mati rasa"
        },
        {
          image: "https://i.ibb.co/zQzGJyq/1.png",
          jawaban: "Pisau tajam"
        },  
        {
          image: "https://i.ibb.co/0FQrGKg/7.png",
          jawaban: "Tenaga listrik"
        },  
        {
          image: "https://i.ibb.co/dLQBbws/3.png",
          jawaban: "Mari makan"
        },  
        {
          image: "https://i.ibb.co/YfVmKP3/15.png",
          jawaban: "Potongan harga"
        },  
        {
          image: "https://i.ibb.co/TgyxWJD/16.png",
          jawaban: "Udang rebus"
        },  
        {
          image: "https://i.ibb.co/MctTZdL/6.png",
          jawaban: "Sarung bantal"
        },  
        {
          image: "https://i.ibb.co/CzfxpmF/17.png",
          jawaban: "Kambing guling"
        },  
        {
          image: "https://i.ibb.co/QNqbBdm/12.png",
          jawaban: "Minta uang"
        },  
        {
          image: "https://i.ibb.co/1QyBPrZ/2.png",
          jawaban: "Jam tangan"
        }, 
        {
          image: "https://i.ibb.co/NWf1h0v/14.png",
          jawaban: "Daun bayam"
        },  
        {
          image: "https://i.ibb.co/2N75WZY/8.png",
          jawaban: "Obat nyamuk"
        },  
        {
          image: "https://i.ibb.co/QkWpkXK/9.png",
          jawaban: "Tahi lalat"
        },
        {
          image: "https://i.ibb.co/zHXdYbr/34.png",
          jawaban: "Lebih baik"
        },
        {
          image: "https://i.ibb.co/9hT8hg2/22.png",
          jawaban: "Jangka kaki"
        },
        {
          image: "https://i.ibb.co/FVWBGPm/26.png",
          jawaban: "Harga pas"
        },
        {
          image: "https://i.ibb.co/vh9S56s/31.png",
          jawaban: "Hidup senang"
        },
        {
          image: "https://i.ibb.co/yB7WBfF/27.png",
          jawaban: "Tempat makan"
        },
        {
          image: "https://i.ibb.co/qJZhS5x/24.png",
          jawaban: "Rumput kering"
        },
        {
          image: "https://i.ibb.co/vjW4NX8/38.png",
          jawaban: "Untaian bunga"
        },
        {
          image: "https://i.ibb.co/N6HkPyz/30.png",
          jawaban: "Kucing belang"
        },
        {
          image: "https://i.ibb.co/wdp8Zyb/36.png",
          jawaban: "Pinjam kemeja"
        },
        {
          image: "https://i.ibb.co/6sK8MBJ/28.png",
          jawaban: "Buku cerita"
        },
        {
          image: "https://i.ibb.co/gz0J5BD/23.png",
          jawaban: "Polisi tidur"
        },
        {
          image: "https://i.ibb.co/qM2FCc0/39.png",
          jawaban: "Pohon rambutan roboh"
        },
        {
          image: "https://i.ibb.co/bgV9RnP/29.png",
          jawaban: "Racun tikus"
        },
        {
          image: "https://i.ibb.co/12cxmJ2/35.png",
          jawaban: "Petenis handal"
        },
        {
          image: "https://i.ibb.co/Js8qXhc/37.png",
          jawaban: "Senam otak"
        },
        {
          image: "https://i.ibb.co/6v4Xk9C/33.png",
          jawaban: "Pulang sekolah"
        },
        {
          image: "https://i.ibb.co/SsZLtSB/32.png",
          jawaban: "Rumah tangga"
        },
        {
          image: "https://i.ibb.co/Tkqbc19/21.png",
          jawaban: "Tangan kesemutan"
        },
        {
          image: "https://i.ibb.co/HdV2z4b/25.png",
          jawaban: "Minum jamu"
        },
        {
          image: "https://i.ibb.co/1JyY4gS/20.png",
          jawaban: "Nasib buruk"
        },
        {
          image: "https://i.ibb.co/7vktg8c/41.png",
          jawaban: "Komputer lelet"
        },
        {
          image: "https://i.ibb.co/DDvwnCK/55.png",
          jawaban: "Kapal keruk"
        },
        {
          image: "https://i.ibb.co/fN3Cgfs/46.png",
          jawaban: "Batu akik"
        },
        {
          image: "https://i.ibb.co/6WFBXKQ/51.png",
          jawaban: "Buah tangan"
        },
        {
          image: "https://i.ibb.co/Y3LYrRn/48.png",
          jawaban: "Jalan becek"
        },
        {
          image: "https://i.ibb.co/sV4SfFM/58.png",
          jawaban: "Pancing ikan"
        },
        {
          image: "https://i.ibb.co/HKhjX9n/45.png",
          jawaban: "Calon penari"
        },
        {
          image: "https://i.ibb.co/YN3wFWt/49.png",
          jawaban: "Fermentasi susu"
        },
        {
          image: "https://i.ibb.co/dJpPV4k/53.png",
          jawaban: "Sakit perut"
        },
        {
          image: "https://i.ibb.co/5GLFf9K/42.png",
          jawaban: "Uang habis"
        },
        {
          image: "https://i.ibb.co/JywJVsX/54.png",
          jawaban: "Menangkap ular"
        },
        {
          image: "https://i.ibb.co/qD1LWLQ/47.png",
          jawaban: "Panjang umur"
        },
        {
          image: "https://i.ibb.co/PCp3rWY/43.png",
          jawaban: "Penduduk asli"
        },
        {
          image: "https://i.ibb.co/sQbHtJx/59.png",
          jawaban: "Sebelas korban kebakaran"
        },
        {
          image: "https://i.ibb.co/rmq6sHS/50.png",
          jawaban: "Radiasi matahari"
        },
        {
          image: "https://i.ibb.co/cQV5j53/40.png",
          jawaban: "Pelampung renang"
        },
        {
          image: "https://i.ibb.co/WzsF56g/56.png",
          jawaban: "Daur ulang"
        },
        {
          image: "https://i.ibb.co/3FH1pXw/52.png",
          jawaban: "Patah hati"
        },
        {
          image: "https://i.ibb.co/FHzBYHc/44.png",
          jawaban: "Rajin belajar"
        },
        {
          image: "https://i.ibb.co/QfBzhZq/57.png",
          jawaban: "Darah muda"
        }
    ]

let a = result[Math.floor(Math.random() * result.length)]
return a;
}

const tebakgambar = () => new Promise((resolve, reject) => {
    Random().then(result => {
		resolve({
			result
		})
	}).catch(err => { reject(err) })
})

module.exports = tebakgambar;