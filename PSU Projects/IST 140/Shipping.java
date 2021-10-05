import java.util.Scanner;

public class Shipping {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        double price, weight, shipping = 0, total;
        System.out.print("Enter the price: ");
        price = scnr.nextDouble();
        System.out.print("Enter the weight: ");
        weight = scnr.nextDouble();
        if(price > 100.00 && weight > 10.0) {
            shipping = 20.0;
        } else if(price <= 100.00 && weight > 10.0) {
            shipping = 15.0;
        } else if(price > 100.00 && weight <= 10.0) {
            shipping = 10.0;
        } else if(price <= 100.00 && weight <= 10.0) {
            shipping = 5.0;
        }
        total = price + shipping;
        System.out.println("Your total price is " + total);
    }
}