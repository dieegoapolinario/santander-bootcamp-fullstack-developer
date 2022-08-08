package one.digitalinnovation.loops;

import java.util.Scanner;

public class MaiorEMedia {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num;
        int count = 0, maior = 0, soma = 0;

        do{
            System.out.println("Numero: ");
            num = scan.nextInt();

            soma = soma + num;
            if(num > maior) maior = num;

            count = count + 1;
        }while (count < 5);

        System.out.println("Maior numero: " + maior);
        System.out.println("Média: " + (soma/5));
    }
}
