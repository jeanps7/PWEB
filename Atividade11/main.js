function Maiusculo(){
    var entrada = document.getElementById("entrada").value;
    entrada = entrada.toUpperCase()
    document.getElementById("entrada").value= entrada;
}

function Minusculo(){
    var entrada = document.getElementById("entrada").value;
    entrada = entrada.toLowerCase();
    document.getElementById("entrada").value= entrada;
}