var x = prompt("Digite o X");
var y = prompt("Digite o Y");

function Retangulo(x,y) {
    this.base=x;
    this.altura =y;
    this.area = x *y;
}

var retangulo = new Retangulo(x,y);

alert("A altura é: "+retangulo.altura);
alert("A base é: " + retangulo.base);
alert("A Area é: " + retangulo.area);
