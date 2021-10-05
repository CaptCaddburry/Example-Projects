import java.util.Scanner;

public class FlowerShop {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        double price;
        int arrangements;
        double tax;
        double shipping;
        double total;
        System.out.print("Enter the total price of the order: ");
        price = scnr.nextDouble();
        System.out.print("Enter the number of arrangements ordered: ");
        arrangements = scnr.nextInt();
        tax = price * .07;
        shipping = arrangements * 3;
        total = price + tax + shipping;
        System.out.print("Tax: $");
        System.out.printf("%.2f\n", tax);
        System.out.println("Shipping: $" + shipping);
        System.out.println("Total: $" + total);
    }
}