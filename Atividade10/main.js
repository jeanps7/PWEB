function Abrir() {
    document.getElementById("Texto").innerHTML = "Abra a Janela";
    document.getElementById("Imagem").src = "Fechada.jpg";
}

function Aberta() {
    document.getElementById("Texto").innerHTML = "Fecha a Janela";
    document.getElementById("Imagem").src = "Aberta.jpg";
}

function Quebrar() {
    document.getElementById("Texto").innerHTML = "Quebra a Janela";
    document.getElementById("Imagem").src = "Quebrada.jpg";
}