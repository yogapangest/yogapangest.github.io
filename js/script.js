var judul = document.getElementsByClassName("display-4");
var judul2 = document.getElementsByClassName("lead");
// Memunculkan Judul pertama kali
judul[0].classList.add("muncul-judul");
judul2[0].classList.add("muncul-judul");

window.onscroll = function () {
  // Navigasi transparan
  var nav = document.getElementById("nav");
  if (window.pageYOffset > 100) {
    nav.style.background = "black";
    nav.style.transition = "0.4s";
  } else {
    nav.style.background = "transparent";
    nav.style.transition = "0.4s";
  }

  // Judul Jumbotron
  if (window.pageYOffset > 170) {
    judul[0].classList.remove("muncul-judul");
    judul2[0].classList.remove("muncul-judul");
  } else {
    judul[0].classList.add("muncul-judul");
    judul2[0].classList.add("muncul-judul");
  }

  // Efek Fade about
  var profil = document.querySelectorAll(".about-content");
  if (window.pageYOffset > 500) {
    profil[0].classList.add("muncul");
  } else {
    profil[0].classList.remove("muncul");
  }

  // Efek fade beruntun education
  var kartu = document.querySelectorAll(".content-card");
  if (window.pageYOffset > 1200) {
    for (let i = 0; i < kartu.length; i++) {
      cetak(i);
    }
  } else {
    hapus();
  }

  function cetak(i) {
    setTimeout(angka, 100 * i);

    function angka() {
      kartu[i].classList.add("kart");
    }
  }

  function hapus() {
    for (let i = 0; i < kartu.length; i++) {
      kartu[i].classList.remove("kart");
    }
  }
};

const container = document.querySelector(".gallery");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  // cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function (e) {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
