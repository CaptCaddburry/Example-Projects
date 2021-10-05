import java.util.Scanner;

public class LetterGrade {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        char grade;
        System.out.print("Enter in your letter grade: ");
        grade = scnr.next().charAt(0);
        switch(grade) {
            case 'A':
                System.out.print("The numeric value is 4.0.");
                break;
            case 'B':
                System.out.print("The numeric value is 3.0.");
                break;
            case 'C':
                System.out.print("The numeric value is 2.0.");
                break;
            case 'D':
                System.out.print("The numeric value is 1.0.");
                break;
            case 'F':
                System.out.print("The numeric value is 0.");
                break;
            default:
                System.out.print("Invalid Grade");
                break;
        }
    }
}