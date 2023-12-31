var sidenav = document.getElementById("Sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var titre1 = document.getElementById("titre1");
var titre1t = document.getElementById("titre1t");
var titre1w = document.getElementById("titre1w");
var card = document.getElementById("card");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");
var cardp = document.getElementById("cardp");


let pageActuelle;
 
if (window.location.pathname.endsWith('/zooticoon-mission2/')|| window.location.pathname.endsWith('/zooticoon-mission2/index.html') || window.location.pathname.endsWith('index.html')){
  pageActuelle = 'index';
} else if (window.location.pathname.endsWith('/zooticoon-mission2/restaurant.html') || window.location.pathname.endsWith('restaurant.html')){
  pageActuelle = 'restaurant';
}else if (window.location.pathname.endsWith('/animal.html') || window.location.pathname.endsWith('/zooticoon-mission2/animail.html')){
  pageActuelle = 'animaux';
}else if (window.location.pathname.endsWith('zooticoon-mission2/contact.html') || window.location.pathname.endsWith('/contact.html')){
  pageActuelle = 'contact';
}else if (window.location.pathname.endsWith('/zooticoon-mission2/boutique.html') || window.location.pathname.endsWith('/boutique.html')){
  pageActuelle = 'boutique';
}
/*masque*/
openBtn.addEventListener('click', () => {
  if (pageActuelle === 'index'){
    openNav();
    masqueIndex();
  }else if (pageActuelle === 'restaurant'){
    openNav();
    masqueRestau();
  }else if (pageActuelle === 'animaux'){
    openNav();
    masqueAnimaux();
  }else if (pageActuelle === 'contact'){
    openNav();
  }else if (pageActuelle === 'boutique'){
    openNav();
    masqueBoutique();
  }

})
/*demasque*/
closeBtn.addEventListener('click', () => {
  if (pageActuelle === 'index'){
    closeNav();
    setTimeout(function(){ 
      demasqueIndex();
    }, 400);
  }else if (pageActuelle === 'restaurant'){
    closeNav();
    setTimeout(function(){
      demasqueRestau();
    }, 400);
  }else if (pageActuelle === 'animaux'){
    closeNav();
    setTimeout(function(){
      demasqueAnimaux();
    }, 400);
  }else if (pageActuelle === 'contact'){
    closeNav();
  }else if (pageActuelle === 'boutique'){
    closeNav();
    demasqueBoutique();
  }
})

/* Masque les element de INDEX*/
function masqueIndex(){
  titre1.classList.add("active");
  titre1t.classList.add("active");
  titre1w.classList.add("active");
}
function demasqueIndex(){
  titre1.classList.remove("active");
  titre1t.classList.remove("active");
  titre1w.classList.remove("active");
}

/* Masque les element de ANIMAUX*/
function masqueAnimaux(){
  card.classList.add("active");
  card2.classList.add("active");
  card3.classList.add("active");
  card4.classList.add("active");
  card5.classList.add("active");
  card6.classList.add("active");
  card7.classList.add("active");
  card8.classList.add("active");
  card9.classList.add("active");
}
function demasqueAnimaux(){
  card.classList.remove("active");
  card2.classList.remove("active");
  card3.classList.remove("active");
  card4.classList.remove("active");
  card5.classList.remove("active");
  card6.classList.remove("active");
  card7.classList.remove("active");
  card8.classList.remove("active");
  card9.classList.remove("active");
}

/* Masque les element de RESTAURANT*/
function masqueRestau(){
  card.classList.add("active");
}
function demasqueRestau(){
  card.classList.remove("active");
}
/* Masque les element de BOUTIQUE*/
function masqueBoutique(){
  cardp.classList.add("active");
}
function demasqueBoutique(){
  cardp.classList.remove("active");
}

/* Ouvre et ferme la NAV */
function openNav() {
  sidenav.classList.add("active");
}
function closeNav() {
  sidenav.classList.remove("active");
}

