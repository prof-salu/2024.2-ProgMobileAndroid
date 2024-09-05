export default class Conta{
  //Construtor
  constructor(agencia, numero, saldo){
    this.agencia = agencia;
    this.numero = numero;
    this.saldo = saldo;
  }

  exibeDados(){
    console.log('Agencia: ' + this.agencia);
    console.log('Numero: ' + this.numero);
    console.log('Saldo: ' + this.saldo);
  }

}