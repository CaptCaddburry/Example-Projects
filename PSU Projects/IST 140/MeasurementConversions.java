import java.util.Scanner;

public class MeasurementConversions {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        double meters;
        System.out.print("Enter your measurement in meters: ");
        meters = scnr.nextDouble();
        System.out.println("Miles: " + meters / 1609);
        System.out.println("Feet: " + meters * 3.281);
        System.out.println("Inches: " + meters * 39.37);
    }
}