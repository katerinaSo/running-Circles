window.onload = setInterval(animation, 1000);

function animation() {
    var h = window.innerHeight;
    var w = window.innerWidth;
    var circle01 = document.getElementById('one');
    var circle02 = document.getElementById('two');
    var circle03 = document.getElementById('three');
    circle01.style.top = Math.floor(Math.random() * h) + 'px';
    circle01.style.left = Math.floor(Math.random() * w) + 'px';
    circle02.style.top = Math.floor(Math.random() * h) + 'px';
    circle02.style.left = Math.floor(Math.random() * w) + 'px';
    circle03.style.top = Math.floor(Math.random() * h) + 'px';
    circle03.style.left = Math.floor(Math.random() * w) + 'px';
};
