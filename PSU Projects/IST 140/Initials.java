import java.util.Scanner;

public class Initials {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        String first, middle, last;
        System.out.print("Enter your first name: ");
        first = scnr.next();
        System.out.print("Enter your middle name: ");
        middle = scnr.next();
        System.out.print("Enter your last name: ");
        last = scnr.next();
        System.out.println("Your initials are: " + first.substring(0, 1) + middle.substring(0, 1) + last.substring(0, 1));
    }
}