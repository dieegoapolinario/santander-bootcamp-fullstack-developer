package one.digitalinnovation.retornos;

public class Main {
    public static void main(String[] args) {
        System.out.println("Quadrilátero");
        double areaQuadrado = Quadrilatero.area(3);
        System.out.println("Quadrado: " + areaQuadrado);

        double areaRetangulo = Quadrilatero.area(5d, 5d);
        System.out.println("Retangulo: " + areaRetangulo);

        double areaTrapezio = Quadrilatero.area(7, 8, 9);
        System.out.println("Trapezio: " + areaTrapezio);

        double areaLosango = Quadrilatero.area(5f,5f);
        System.out.println("Losango: " + areaLosango);
    }
}
