import java.util.Scanner;

public class ATM {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int pin;
        int counter = 0;
        System.out.print("Enter in your PIN: ");
        pin = scnr.nextInt();
        if (pin == 1234) {
            System.out.println("Your PIN is correct");
        } else {
            System.out.println("your PIN is incorrect");
            counter++;
            if (counter < 3) {
                System.out.println("Enter in your PIN: ");
                pin = scnr.nextInt();
                if (pin == 1234) {
                    System.out.println("Your PIN is correct");
                } else {
                    System.out.println("your PIN is incorrect");
                    counter++;
                    if (counter < 3) {
                        System.out.println("Enter in your PIN: ");
                        pin = scnr.nextInt();
                        if (pin == 1234) {
                            System.out.println("Your PIN is correct");
                        } else {
                            System.out.println("your PIN is incorrect");
                            counter++;
                            if (counter < 3) {
                                System.out.println("Enter in your PIN: ");
                                pin = scnr.nextInt();
                            } else {
                                System.out.println("Your bank card is blocked");
                            }
                        }
                    }
                }
            }
        }
    }
}