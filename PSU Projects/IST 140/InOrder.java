import java.util.Scanner;

public class InOrder {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int number1, number2, number3;
        System.out.print("Enter in digit 1: ");
        number1 = scnr.nextInt();
        System.out.print("Enter in digit 2: ");
        number2 = scnr.nextInt();
        System.out.print("Enter in digit 3: ");
        number3 = scnr.nextInt();

        if(number1 < number2) {
            if(number2 <= number3) {
                System.out.print("in ascending order");
            } else {
                System.out.print("not in order");
            }
        } else if (number1 > number2) {
            if(number2 >= number3) {
                System.out.print("in descending order");
            } else {
                System.out.print("not in order");
            }
        } else if (number1 == number2 && number1 == number3) {
            System.out.print("all the same");
        }
    }
}