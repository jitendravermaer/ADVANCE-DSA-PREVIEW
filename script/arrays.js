// Data specific to the ARRAYS folder
const codeFiles = {
    ArrayDemo: `public class ArrayDemo {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for (int value : arr) {
            System.out.println(value);
        }
    }
}`,
    ArrayInput: `import java.util.Scanner;
public class ArrayInput {
    public static void main(String[] args) {
        // NOTE: This code requires user input.
        // For a live environment, you would need to simulate input.
        // This is a simple display of the code.
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        System.out.println("Enter 5 integers:");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println("The entered values are:");
        for (int num : arr) {
            System.out.println(num);
        }
    }
}`,
    SortArray: `import java.util.Arrays;
public class SortArray {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 3};
        Arrays.sort(arr);
        System.out.print("Sorted array: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}`,
    PassingArraysToFunctions: `public class PassingArraysToFunctions {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30};
        System.out.println("Printing array from a function:");
        printArray(numbers);
    }
    static void printArray(int[] arr) {
        for (int val : arr) {
            System.out.println(val);
        }
    }
}`,
    ArrayOfObjects: `// This requires the Employee class to be compiled as well.
public class ArrayOfObjects {
    public static void main(String[] args) {
        Employee[] employees = new Employee[2];
        employees[0] = new Employee("John", 101);
        employees[1] = new Employee("Jane", 102);

        System.out.println("Employee details:");
        for (Employee e : employees) {
            e.display();
        }
    }
}
class Employee {
    String name;
    int id;

    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }

    void display() {
        System.out.println("ID: " + id + ", Name: " + name);
    }
}`,
    Employee: `public class Employee {
    String name;
    int id;

    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }

    void display() {
        System.out.println("ID: " + id + ", Name: " + name);
    }
}`
};

const outputData = {
    ArrayDemo: `1
2
3
4
5`,
    ArrayInput: `Enter 5 integers:
1
2
3
4
5
The entered values are:
1
2
3
4
5`,
    SortArray: `Sorted array: 1 2 3 5 8`,
    PassingArraysToFunctions: `Printing array from a function:
10
20
30`,
    ArrayOfObjects: `Employee details:
ID: 101, Name: John
ID: 102, Name: Jane`,
    Employee: `// No direct output for this file.
// It's a class definition for ArrayOfObjects.java`
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('ArrayDemo', document.querySelector('.file-btn'));
};
