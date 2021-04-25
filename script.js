document.querySelector("#fossilized-img").setAttribute('src','images/IMG_20190510_080847.png'); 
document.querySelector("#plant-children-img").setAttribute('src','images/IMG_20190515_163642.png');


document.querySelector("#fossilized").onclick = function () {
    location.href = 'https://www.anathemamag.com/fossilized';
};
document.querySelector("#plant-children").onclick = function () {
    location.href = 'http://www.destroysf.com/table-of-contents-queers-destroy-science-fiction/';
};

// emoji from Twitter emoji/twemoji. Github: https://github.com/twitter/twemoji
const footer = document.querySelector('footer');
const boba = document.createElement('img');
boba.setAttribute('src', 'images/1f9cb.svg');
boba.setAttribute('width', 200);
boba.setAttribute('height', 200);
boba.style.position = "absolute";
boba.style.zIndex = 5;
footer.style.zIndex = 10;
footer.appendChild(boba);


topButton = document.getElementById("top-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function changeBg() {
  let mainBg = document.querySelector('body');
  let scrollValue = window.scrollY;
  if (scrollValue < 60 ){
    mainBg.classList.remove('newBgColor');
  }
  else
    mainBg.classList.add('newBgColor');
}

window.addEventListener('scroll', changeBg);
