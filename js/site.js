const activareButonI = document.querySelector(".activare-buton i");
const meniuVertical = document.querySelector(".meniu-vertical");

activareButonI.onclick = function () {
  meniuVertical.classList.toggle("deschis");
  const esteDeschis = meniuVertical.classList.contains("deschis");
  activareButonI.classList = esteDeschis
    ? "fa solid fa-xmark"
    : "fa solid fa-bars";
};
