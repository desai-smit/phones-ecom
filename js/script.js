$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('change');
  }
  else{
    $('nav').removeClass('change');
  }
})

function menu(){
  // document.getElementById('menuBar').classList.toggle('tgl');
  document.getElementById('leFt').style.left = '0%';
}

function closeMenu(){
  document.getElementById('leFt').style.left = '-50%';
}

var a = document.getElementById('aol');
var b = document.getElementById('apple');
var c = document.getElementById('sums');
var d = document.getElementById('head');

function alo(){
  a.style.display= 'block';
  b.style.display= 'none';
  c.style.display= 'none';
  d.style.display= 'none';
}

function apple(){
  a.style.display= 'none';
  b.style.display= 'block';
  c.style.display= 'none';
  d.style.display= 'none';
}

function sum(){
  a.style.display= 'none';
  b.style.display= 'none';
  c.style.display= 'block';
  d.style.display= 'none';
}

function hea(){
  a.style.display= 'none';
  b.style.display= 'none';
  c.style.display= 'none';
  d.style.display= 'block';
}

