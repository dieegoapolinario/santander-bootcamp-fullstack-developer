package one.digitalinnovation.tiposMetodos;

public class Main {
    public static void main(String[] args) {
        System.out.println("Calculadora");
        Calculadora.soma(3,6);
        Calculadora.subtracao(9,1.8);
        Calculadora.multiplicacao(7,8);
        Calculadora.divisao(5,2.5);

        System.out.println("Mensagem");
        Mensagem.obterMensagem(9);
        Mensagem.obterMensagem(4);
        Mensagem.obterMensagem(1);

        System.out.println("Emprestimo");
        Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(1000, Emprestimo.gettresParcelas());
        Emprestimo.calcular(1000, 5);
    }
}
