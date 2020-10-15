const btnMenu = document.querySelector(".btnMenu")
const menuOpenActive = document.querySelector(".menuOpen")
const textOpen = document.querySelector(".textRosp")
//----------------------------------------------------------------------
const vtbtn = document.querySelector(".vtbtn")
const vtmenu = document.querySelector(".vtmenu")
const vttext = document.querySelector(".vttext")
//-----------------------------------------------------------------------
const srdbtn = document.querySelector(".srdbtn")
const srdmenu = document.querySelector(".srdmenu")
const srdtext = document.querySelector(".srdtext")
//-----------------------------------------------------------------------
const chetbtn = document.querySelector(".chetbtn")
const chetmenu = document.querySelector(".chetmenu")
const chettext = document.querySelector(".chettext")
//-----------------------------------------------------------------------
const ptnbtn = document.querySelector(".ptnbtn")
const ptnmenu = document.querySelector(".ptnmenu")
const ptntext = document.querySelector(".ptntext")
//-----------------------------------------------------------------------
const sbtbtn = document.querySelector(".sbtbtn")
const sbtmenu = document.querySelector(".sbtmenu")
const sbttext = document.querySelector(".sbttext")

btnMenu.addEventListener("click", function () {
   menuOpenActive.classList.toggle("menuOpenActive")
   textOpen.classList.toggle("textRospOpen")
});

vtbtn.addEventListener("click", function () {
   vtmenu.classList.toggle("vtmenuopen")
   vttext.classList.toggle("vttextopen")
});

srdbtn.addEventListener("click", function () {
   srdmenu.classList.toggle("srdmenuopen")
   srdtext.classList.toggle("srdtextopen")
});

chetbtn.addEventListener("click", function () {
   chetmenu.classList.toggle("chetmenuopen")
   chettext.classList.toggle("chettextopen")
});

ptnbtn.addEventListener("click", function () {
   ptnmenu.classList.toggle("ptnmenuopen")
   ptntext.classList.toggle("ptntextopen")
});

sbtbtn.addEventListener("click", function () {
   sbtmenu.classList.toggle("sbtmenuopen")
   sbttext.classList.toggle("sbttextopen")
});