package one.digitalinnovation.desafioBanco;

public class Main {
  public static void main(String[] args) {
    Cliente cli = new Cliente();
    cli.setNome("Diego");

    Conta cc = new ContaCorrente(cli);
    Conta poupanca = new Contapoupanca(cli);

    cc.depositar(100);
    cc.transferir(25, poupanca);

    cc.imprimirExtrato();
    poupanca.imprimirExtrato();
  }
}
