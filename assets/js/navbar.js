let searchIcon = document.querySelector('.searchIcon');
let closeIcon = document.querySelector('.closeIcon');
let searchBox = document.querySelector('.searchBox');

let navegacao = document.querySelector('.navegacao');
let menuToggle = document.querySelector('.menuToggle');
let nav = document.querySelector('nav');

searchIcon.onclick = function(){
    searchBox.classList.add('active');
    closeIcon.classList.add('active');
    searchIcon.classList.add('active');
    menuToggle.classList.add('hide');
    nav.classList.remove('open');
}

closeIcon.onclick = function(){
    searchBox.classList.remove('active');
    closeIcon.classList.remove('active');
    searchIcon.classList.remove('active');
    menuToggle.classList.remove('hide');
}

menuToggle.onclick = function(){
    nav.classList.toggle('open');
    searchBox.classList.remove('active');
    closeIcon.classList.remove('active');
    searchIcon.classList.remove('active');
}

