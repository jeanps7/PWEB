document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function git(){
  window.open('https://github.com/jeanps7', '_blank');
}

function gitBootcamp(){
  window.open('https://github.com/jeanps7/bootcamp-html', '_blank');
}

function gitPweb(){
  window.open('https://github.com/jeanps7/PWEB', '_blank');
}

function linkedin(){
  window.open('https://www.linkedin.com/in/jean-philip22/', '_blank');
}

function java(){
  window.open('https://www.java.com/pt-BR/', '_blank');
}

function c(){
  window.open('https://docs.microsoft.com/pt-br/dotnet/csharp/', '_blank');
}

function html(){
  window.open('https://pt.wikipedia.org/wiki/HTML', '_blank');
}

function instagram(){
  window.open('https://www.instagram.com/jeanps13/', '_blank');
}

function twitter(){
  window.open('https://twitter.com/home', '_blank');
}

function trocaFoto() {
  document.getElementById("Imagem").src = "img/wolverine.jpg";
}

function mouseOut() {
  document.getElementById("Imagem").src = "img/jean.jpeg";
}