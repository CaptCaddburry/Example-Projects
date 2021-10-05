import java.util.Scanner;

public class SentenceLength {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        String message;
        System.out.print("Enter in any string: ");
        message = scnr.nextLine();
        System.out.println("Your string has a length of " + message.length() + " characters.");
    }
}