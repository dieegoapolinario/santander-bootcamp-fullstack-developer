package one.digitalinnovation.arrays;

public class OrdemInversa {
    public static void main(String[] args) {

        int[] vetor = {-5, -6, 15, 50, 8, 4};

        System.out.print("Vetor Original: ");
        int count = 0;
        while (count < (vetor.length - 1)){
            System.out.print(vetor[count] + " ");
            count++;
        }

        System.out.print("\nVetor Reverso: ");
        for (int i = (vetor.length-1); i >= 0; i--){
            System.out.print(vetor[i] + " ");
        }
    }
}
