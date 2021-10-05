import java.util.Scanner;

public class Sugar {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int cups, cakes, pies, cupcakes, cookies;
        int temp;
        System.out.print("Enter how many cups of sugar you have: ");
        cups = scnr.nextInt();
        cakes = cups / 5;
        temp = cups % 5;
        System.out.println("Cakes: " + cakes);
        pies = temp / 3;
        temp = temp % 3;
        System.out.println("Pies: " + pies);
        cupcakes = temp / 2;
        cookies = temp % 2;
        System.out.println("Cupcakes: " + cupcakes);
        System.out.println("Cookies: " + cookies);
    }
}