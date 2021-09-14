const fetch = require('node-fetch')

async function Random() {
    let c;
let result =[
    {
     pertanyaan: 'Matahari tenggelam di sebelah…', 
     jawaban:'Gawat', 
     keterangan: 'Gawat kalau matahari tenggelam di sebelah kita'
    },
    {
     pertanyaan: 'Galang menyimpan buku di…', 
     jawaban: 'Mas', 
     keterangan: 'Bukunya dimas dipinjam galang kemarin sore.'
    },
    {
     pertanyaan: 'Bersatu kita teguh bercerai kita——-', 
     jawaban: 'Sedih', 
     keterangan: 'Siapa yang gak sedih cerai sama istri??'
    },
    { 
     pertanyaan: 'Makanan yang dibungkus daun pisang?', 
     jawaban: 'Lontong', 
     keterangan: 'Gampang kan? suka ga sama lontong?'
    },
    {
     pertanyaan: 'Apabila mengendarai mobil wajib bawa', 
     jawaban: 'Satu', 
     keterangan: 'Kalo bawa 2 gimana mengendarainya'
    },
    { 
     pertanyaan: 'Mawar melati semuanya…', 
     jawaban: 'Bunga', 
     keterangan: 'Kalo bukan bunga apa coba, hewan?'
    },
    {
     pertanyaan: 'Jangan membuang tisu di…',
     jawaban: 'Tempatnya', 
     keterangan: 'Masih di tempatnya kok di buang'
    },
    {
     pertanyaan: 'Ketika _____ orang biasanya makan.', 
     jawaban: 'Marah', 
     keterangan: 'Orang marah apa enggak ya pasti makan..'
    },
    {
     pertanyaan: 'Burung adalah hewan yang bisa..', 
     jawaban: 'Temenan', 
     keterangan: 'Kan kalo burung terbang rame-rame sama temennya..'
    },
    {
     pertanyaan: 'Hewan yang suka buka mulut lebar', 
     jawaban: 'Kenaflu', 
     keterangan: 'Itu karena ga bisa napas idungnya mampet..'
    },
    {
     pertanyaan: 'Hewan yang berubah warna kalau ada musuhnya?', 
     jawaban: 'Bengong', 
     keterangan: 'Karena, musuhnya bengong lihat hewan berubah warna'
    },
    {
     pertanyaan: 'Artis wanita yang punya kumis tipis', 
     jawaban: 'Ih kumisan', 
     keterangan: 'Ih kok kumisan sih..'
    },
    {
     pertanyaan: 'Pintu biasa di….', 
     jawaban: 'Tekan', 
     keterangan: 'Kalau anda biasa ke atm kan pin ditekan'
    },
    {
     pertanyaan: 'Lebak bulus', 
     jawaban: 'Terkenal', 
     keterangan: 'Karena lebak bulus, cililitan semua orang tau maka nya terkenal'
    },
    {
     pertanyaan: 'Seorang matador bisa terluka karena diseruduk..', 
     jawaban: 'Biskota', 
     keterangan: 'Mau banteng, mau bis kota, tetep aja bisa terluka..'
    },
    {    
     pertanyaan: 'Cermin jika di lap jadi…', 
     jawaban: 'Cermin', 
     keterangan: 'Ya masa berubah, yaa tetap cermin'
    },
    {
     pertanyaan: 'Batik merupakan produk asli dari…', 
     jawaban: 'Manusia', 
     keterangan: 'Sejauh ini belum ada mahluk lain yang bisa'
    },
    {
     pertanyaan: 'Kendaraan yang suka dipake tukang ojek?', 
     jawaban: 'Mogok', 
     keterangan: 'Motor emang suka mogok'
    },
    {
     pertanyaan: 'Binatang apa yang ga bisa bergerak?', 
     jawaban: 'Paus', 
     keterangan: 'Kalau game di pause) kan berhenti main nya'
    },
    {
     pertanyaan: 'Sehabis olahraga', 
     jawaban: 'Airminum', 
     keterangan: 'Abis olahraga pasti haus kan'
    },
    { 
     pertanyaan: 'Di tiup angin berkibar di setiap negara', 
     jawaban: 'Jemuran', 
     keterangan: 'Disetiap negara orang menjemur pakaiannya'
    },
    {
     pertanyaan: 'Kalo haus minum', 
     jawaban: 'Aja', 
     keterangan: 'Minum aja ntar juga ga aus'
    },
    {
     pertanyaan: 'Yang bikin harum', 
     jawaban: 'Pfffht', 
     keterangan: 'Kan bunyi pengharum ruangan pffht'
    },
    {
     pertanyaan: 'Hayam wuruk memerintah kerajaan?', 
     jawaban: 'Jamandulu', 
     keterangan: 'Ya iyalah… masa jaman sekarang'
    },
    {
     pertanyaan: 'Malam apa yang paling indah?', 
     jawaban: 'Malamarkamu', 
     keterangan: 'Eaa…eaa…eaa..'
    },
    {
     pertanyaan: 'Makanan khas indonesia dari kedelai yang sudah mendunia', 
     jawaban: 'Lezat', 
     keterangan: 'Memang tempe lezat nan bergizi'
    },
    {
     pertanyaan: 'Hewan tinggal disawah', 
     jawaban: 'Bandel', 
     keterangan: 'Lintah tinggalnya disungai suka hisap darah orang, ya sudah bandel namanya'
    },
    {
     pertanyaan: 'Makanan harus di….', 
     jawaban: 'Masak', 
     keterangan: 'Coba aja makan nasi yang nggak dimasak'
    },
    {
     pertanyaan: 'Ibukota indonesia', 
     jawaban: 'Udahada', 
     keterangan: 'Yg belum ada itu ibukota jakarta'
    },
    {
     pertanyaan: 'Di palembang terdapat jembatan..', 
     jawaban: 'Anjlok',
     keterangan: 'Namanya aja jembatan, kan bisa aja rusak..'
    },
    {
     pertanyaan: 'Orang berolah raga biar..', 
     jawaban: 'Inlah', 
     keterangan: 'Jangan dilarang-larang kalo orang mau sehat..'
    },
    {
     pertanyaan: 'Ibu menjahit dengan jarum dan..', 
     jawaban: 'Serius', 
     keterangan: 'Ya harus serius dong, biar selesai..'
    },
    {
     pertanyaan: 'Kata untuk menyapa orang batak di medan', 
     jawaban: 'Hallo', 
     keterangan: 'Klo ga bales berati lagi sibuk ya kak'
    },
    {
     pertanyaan: 'Burung besi di sebut juga..', 
     jawaban: 'Pesanan', 
     keterangan: 'Yang mesen burungnya. minta di buat dari besi'
    },
    {
     pertanyaan: 'Sumur itu berbentuk?', 
     jawaban: 'Lubang', 
     keterangan: 'Pasti lubang kalo ga ada lubangnya namanya bukan sumur'
    },
    {
     pertanyaan: 'Tanda kalau kucing marah ekornya?', 
     jawaban: 'Satu', 
     keterangan: 'Karena kalau bukan satu namanya bukan kucing'
    },
    {
     pertanyaan: 'Buah apa yang sering dibawa pas lagi main kerumah pacar?', 
     jawaban: 'Apel', 
     keterangan: 'Ya kan kalo main ke rumah pacar sering ngapel..'
    },
    {
     pertanyaan: 'Baju disimpan orang di…', 
     jawaban: 'Anyari', 
     keterangan: 'Kalo ibu pasti simpen di lemari, kalo orang lain tau dmana..'
    },
    {
     pertanyaan: 'Buah-buah apa yang tua', 
     jawaban: 'Singkong', 
     keterangan: 'Kan si – ngkong gimana si vrohh'
    },
    {
     pertanyaan: 'Tidak pintar pelajaran', 
     jawaban: 'Boleh', 
     keterangan: 'Pelajaran tidak pintar boleh, tidak dipelajari tidak boleh'
    },
    {
     pertanyaan: 'Hewan yang besar namanya', 
     jawaban: 'Gemuk', 
     keterangan: 'Karena hewan yg badan nya besar pasti gemuk'
    },
    {
     pertanyaan: 'Ada di akhir cerita..', 
     jawaban: 'Tdana', 
     keterangan: 'Bener kan ? ada huruf t dan a'
    },
    {
     pertanyaan: 'Sd adalah sekolah', 
     jawaban: 'Damai', 
     keterangan: 'Semoga semua sekolah damai, beprestasi muridnya'
    },
    {
     pertanyaan: 'Kalau haus minum', 
     jawaban: 'Masak', 
     keterangan: 'Makanan nya belom mateng, jadi harus dimasak dulu'
    },
    {
     pertanyaan: 'Pasang bendera di…', 
     jawaban: 'Tarik', 
     keterangan: 'Kalo ga ditarik ga naik benderanya'
    },
    {
     pertanyaan: 'Jalannya luas gak bisa lewat', 
     jawaban: 'Ludah', 
     keterangan: 'Udah saya cobain sendiri, susah…'
    },
    {
     pertanyaan: 'Sebelum di minum kopi di', 
     jawaban: 'Mulut', 
     keterangan: 'Sebelum di minum pasti di taruh mulut'
    },
    {
     pertanyaan: 'Temannya nobita..', 
     jawaban: 'Sedikit', 
     keterangan: 'Coba aja itung ada berapa, sedikit kan?'
    },
    {
     pertanyaan: 'Mandi biar…', 
     jawaban: 'Byuur', 
     keterangan: 'Segeerr, kamu sudah mandi belum?'
    },
    {
     pertanyaan:  'Monumen jakarta itu', 
     jawaban: 'Keras', 
     keterangan: 'Coba aja kamu gigit'
    },
    {
     pertanyaan:  'Ayam apa yang gede banget?', 
     jawaban: 'Ayamsemesta', 
     keterangan: 'Gede bener kan itu!'
    },
    {
     pertanyaan: 'Alat musik tiup..', 
     jawaban: 'Sudahada', 
     keterangan: 'Emang udah ada kan, banyak lho jenisnya..'
    },
    {
     pertanyaan: 'Di dalam perpustakaan tidak boleh..', 
     jawaban: 'Keramas', 
     keterangan: 'Nanti bukunya basah semua doong..'
    },
    {
     pertanyaan: 'Rizky febian lahir di', 
     jawaban: 'Gendong', 
     keterangan: 'Ya di gendong dulu lah masa langsung di mandiin'
    },
    {
     pertanyaan: 'Para pejuang melawan penjajah dengan senjata??', 
     jawaban: 'Bikinsendiri', 
     keterangan: 'Klo gak bikin sendiri lah trus dibikinin siapa'
    },
    {
     pertanyaan: 'Kakak mengantar adik sekolah sampai', 
     jawaban: 'Capek', 
     keterangan: 'Nganter nya di gendong'
    },
    {
     pertanyaan: 'Orang sakit minum?', 
     jawaban: 'Oiya', 
     keterangan: 'Sakit minum yang banyak yah, biar cepet sembuh'
    },
    {
     pertanyaan: 'Pesawat mendarat di…', 
     jawaban: 'Bantuin', 
     keterangan: 'Pilot, co-pilot, operator bandara dan lain-lain..'
    },
    {
     pertanyaan: 'Di rumah ada adik', 
     jawaban: 'Masak', 
     keterangan: 'Hmm kira kira lagi masak apa yah…'
    },
    {
     pertanyaan: 'Pelat nomer kendaraan a berasal dari?', 
     jawaban: 'Samsat', 
     keterangan: 'Karena samsat merupakan institusi yg berhak mengeluarkan plat kendaraan bermotor..'
    },
    {
     pertanyaan: 'Hujan deres bikin …', 
     jawaban: 'Basah', 
     keterangan: 'Kalau panas pasti kering'
    },
    {
     pertanyaan: 'Makan dianjurkan pakai tangan…',
     jawaban: 'Benar', 
     keterangan: 'Kanan atau kiri boleh kok, kanan lebih bagus sih katanya'
    },
    {
     pertanyaan: 'Apa yang tidak boleh di bawa kepesawat', 
     jawaban: 'Sendiri', 
     keterangan: 'Karena kalo kita bawa sendiri nanti jatuh'
    },
    {
     pertanyaan: 'Alpukat', 
     jawaban: 'Bisa', 
     keterangan: 'Memang bisa disebut'
    },
    {
     pertanyaan: 'Bekas pacar disebut', 
     jawaban: 'Jangan', 
     keterangan: 'Nanti pacar yang sekarang marah'
    },
    {
     pertanyaan: 'Di akuarium ada ikan 10 mati 2 tinggal', 
     jawaban: 'Dibuang', 
     keterangan: 'Kalo ga di buang, ikan yang laen jadi ikutan mati'
    },
    {
     pertanyaan: 'Tidak masuk kerja karena hari..', 
     jawaban: 'Diphk', 
     keterangan: 'Ya kan si hari kalo di phk ga usah masuk kerja lagi..'
    },
    {
     pertanyaan: 'Tinky winky', 
     jawaban: 'Tenarsekali', 
     keterangan: 'Nama nama tersebut sudah terkenal di semua kalangan'
    },
    {
     pertanyaan: 'Cicak jatuh ke…', 
     jawaban: 'Bacok', 
     keterangan: 'Di bacok mah jatuh'
    },
    {
     pertanyaan: 'Mulutmu ………..', 
     jawaban: 'Hanyasatu', 
     keterangan: 'Mulut kan emang cuma satu'
    }
]
let a = result[Math.floor(Math.random() * result.length)]
return a;
}

const caklontong = () => new Promise((resolve, reject) => {
    Random().then(result => {
		resolve({
			result
		})
	}).catch(err => { reject(err) })
})

module.exports = caklontong;