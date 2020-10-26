function Conta() {
    var nome,banco,numeroConta,saldo;
    this.getNome = function() {
        return nome;
    }
    this.setNome = function(value) {
        nome = value;
    }
    this.getBanco = function() {
        return banco;
    }
    this.setBanco = function(value) {
        banco = value;
    }
    this.getNumero = function() {
        return numeroConta;
    }
    this.setNumero = function(value) {
        numeroConta = value;
    }
    this.getSaldo = function() {
        return saldo;
    }
    this.setSaldo = function(value) {
        saldo = value;
    }
}

function Corrente(){
    var saldoEspecial;
    this.getSaldoEspecial = function() {
        return saldoEspecial;
    }
    this.setSaldoEspecial = function(value) {
        saldoEspecial = value;
    }
}

function Poupanca(){
    var juros,dataVencimento;
    this.getJuros = function() {
        return juros;
    }
    this.setJuros = function(value) {
        juros = value;
    }
    this.getData = function() {
        return dataVencimento;
    }
    this.setData = function(value) {
        dataVencimento = value;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

nCorrente = new Corrente();
nPoupanca = new Poupanca();

nCorrente.setNome("Jean Philip");
nCorrente.setBanco("Nubank");
nCorrente.setNumero("11111");
nCorrente.setSaldo("1200,00");
nCorrente.setSaldoEspecial("5200,00");


alert(nCorrente.getNome() + '\n' + nCorrente.getBanco() + '\n' + nCorrente.getNumero() + '\n' + nCorrente.getSaldo() + '\n' + nCorrente.getSaldoEspecial());

nPoupanca.setNome("Matheus Soares");
nPoupanca.setBanco("Itau");
nPoupanca.setNumero("22222");
nPoupanca.setSaldo("100,00");
nPoupanca.setJuros("90%");
nPoupanca.setData("11/12/2020");

alert(nPoupanca.getNome() + '\n' + nPoupanca.getBanco() + '\n' + nPoupanca.getNumero() + '\n' + nPoupanca.getSaldo() + '\n' + nPoupanca.getJuros() + '\n' + nPoupanca.getData());
