package one.digitalinnovation.loops;

import java.util.Scanner;

public class ParEImpar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int quantNumeros, numero;
        int count = 0, quantPares = 0, quantImpares = 0;

        System.out.println("Quantidade de números: ");
        quantNumeros = scan.nextInt();

        do{
            System.out.println("Número: ");
            numero = scan.nextInt();

            if(numero % 2 == 0) quantPares++;
            else quantImpares++;

            count++;
        }while (count < quantNumeros);

        System.out.println("Pares: " + quantPares);
        System.out.println("Impares: " + quantImpares);
    }
}
