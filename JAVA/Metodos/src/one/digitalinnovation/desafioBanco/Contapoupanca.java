package one.digitalinnovation.desafioBanco;

public class Contapoupanca extends Conta{
  public Contapoupanca(Cliente cliente){
    super(cliente);
  }
  public void imprimirExtrato(){
    System.out.println("=== Extrato Conta Poupança ===");
    super.imprimirInfosComums();
  }
}
