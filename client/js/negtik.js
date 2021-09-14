const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["ONLINE", "ENJOY~"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

var jam = new Date();
const hour_now = jam.getHours()
var ucapanWaktu = "Ohayōgozaimasu Minna"//'Pagi🌄'
if (hour_now >= '03' && hour_now <= '10') {
      ucapanWaktu = "Ohayōgozaimasu Minna"//'Pagi 🌅'
    } else if (hour_now >= '10' && hour_now <= '14') {
      ucapanWaktu = "Konnichiwa Minna"//'Siang 🌞'
    } else if (hour_now >= '14' && hour_now <= '17') {
      ucapanWaktu = "Konnichiwa Minna"//'Soree ☀️'
    } else if (hour_now >= '17' && hour_now <= '18') {
      ucapanWaktu = "Oyasuminasai Minna"//'Selamat 🌠'
    } else if (hour_now >= '18' && hour_now <= '23') {
      ucapanWaktu = "Oyasuminasai Minna"//'Malam 🌌'
    } else {
      ucapanWaktu = "Oyasuminasai Minna"//'Selamat Malam!'
    }
document.getElementById("says").textContent = ucapanWaktu