package br.com.dio.calculadora;

import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        float a, b;

        System.out.println("Primeiro valor:  ");
        a = scan.nextInt();
        System.out.println("Segundo valor:  ");
        b = scan.nextInt();

        float somar = somar(a,b);
        float subtrair = subtrair(a,b);
        float multiplicacao = multiplicacao(a,b);
        float divisao = divisao(a,b);

        System.out.println("somar: " + somar);
        System.out.println("subtrair: " + subtrair);
        System.out.println("multiplicacao: " + multiplicacao);
        System.out.println("divisao: " + divisao);
    }

    public static float somar(float a, float b){
        return a + b;
    }
    public static float subtrair(float a, float b){
        return a - b;
    }
    public static float multiplicacao(float a, float b){
        return a * b;
    }
    public static float divisao(float a, float b){
        return a / b;
    }
}
