package prodigy;

import java.util.Scanner;

public class TemperatureConverter {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean continueConversion = true;

        System.out.println("=== 🌡️ Welcome to the Temperature Converter ===");

        while (continueConversion) {
            double temp = 0.0;
            String unit;

            // Input temperature value with validation
            while (true) {
                System.out.print("\nEnter temperature value (number only): ");
                if (scanner.hasNextDouble()) {
                    temp = scanner.nextDouble();
                    break;
                } else {
                    System.out.println("⚠️ Invalid input. Please enter a numeric value.");
                    scanner.next(); // consume invalid input
                }
            }

            // Input unit with validation
            while (true) {
                System.out.print("Enter unit (C for Celsius, F for Fahrenheit, K for Kelvin): ");
                unit = scanner.next().trim().toUpperCase();
                if (unit.equals("C") || unit.equals("F") || unit.equals("K")) {
                    break;
                } else {
                    System.out.println("⚠️ Invalid unit. Please enter C, F, or K.");
                }
            }

            // Perform conversion
            switch (unit) {
                case "C":
                    convertFromCelsius(temp);
                    break;
                case "F":
                    convertFromFahrenheit(temp);
                    break;
                case "K":
                    convertFromKelvin(temp);
                    break;
            }

            // Ask to continue
            System.out.print("\nWould you like to convert another temperature? (Y/N): ");
            String response = scanner.next().trim().toUpperCase();
            if (!response.equals("Y")) {
                continueConversion = false;
                System.out.println("\nThank you for using the Temperature Converter! 🌟");
            }
        }

        scanner.close();
    }

    static void convertFromCelsius(double celsius) {
        double fahrenheit = (celsius * 9 / 5) + 32;
        double kelvin = celsius + 273.15;
        System.out.printf("🌡️ %.2f°C = %.2f°F | %.2fK\n", celsius, fahrenheit, kelvin);
    }

    static void convertFromFahrenheit(double fahrenheit) {
        double celsius = (fahrenheit - 32) * 5 / 9;
        double kelvin = celsius + 273.15;
        System.out.printf("🌡️ %.2f°F = %.2f°C | %.2fK\n", fahrenheit, celsius, kelvin);
    }

    static void convertFromKelvin(double kelvin) {
        double celsius = kelvin - 273.15;
        double fahrenheit = (celsius * 9 / 5) + 32;
        System.out.printf("🌡️ %.2fK = %.2f°C | %.2f°F\n", kelvin, celsius, fahrenheit);
    }
}


