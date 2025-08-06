// Data specific to the 2D Arrays folder
const codeFiles = {
    TwoDimensionalArrays: `import java.util.Arrays;

public class TwoDimensionalArrays {

    public static void main(String[] args) {
        int[][] arr1 = new int[3][3];
        int[][] arr2 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr1[i].length; j++) {
                arr1[i][j] = i + j;
            }
        }

        System.out.println(arr1);
        System.out.println(Arrays.toString(arr1));
        System.out.println(Arrays.deepToString(arr1));
        System.out.println(Arrays.deepToString(arr2));

        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr1[i].length; j++) {
                System.out.print(arr1[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();

        for (int[] a : arr2) {
            for (int b : a) {
                System.out.print(b + " ");
            }
            System.out.println();
        }
    }
}`,
    TwoDimensionalArraysInput: `import java.util.Arrays;
import java.util.Scanner;

public class TwoDimensionalArraysInput {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows and columns: ");
        int rows = sc.nextInt();
        int cols = sc.nextInt();

        int[][] arr = new int[rows][cols];

        System.out.println("Enter the elements of the array: ");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        System.out.println("The elements of the array are: ");
        for (int i = 0; i < rows; i++) {
            System.out.println(Arrays.toString(arr[i]));
        }
        sc.close();

        System.out.println(Arrays.deepToString(arr));
    }
}`,
    JaggedArray: `import java.util.Arrays;
import java.util.Scanner;

public class JaggedArray {

    public static void main(String[] args) {
        // Jagged array is an array of arrays where each row can have different number of columns
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows: ");
        int rows = sc.nextInt();

        int[][] arr = new int[rows][];

        for (int i = 0; i < rows; i++) {
            System.out.println("Enter the number of columns for row " + (i + 1) + ": ");
            int cols = sc.nextInt();
            arr[i] = new int[cols];
            System.out.println("Enter the elements for row " + (i + 1) + ": ");
            for (int j = 0; j < cols; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        System.out.println("The jagged array is: ");
        for (int i = 0; i < rows; i++) {
            System.out.println(Arrays.toString(arr[i]));
        }

        sc.close();
        System.err.println(Arrays.deepToString(arr));
    }
}`
};

const outputData = {
    TwoDimensionalArrays: `[[I@...
[[I@..., [I@..., [I@...]
[[0, 1, 2], [1, 2, 3], [2, 3, 4]]
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
0 1 2 
1 2 3 
2 3 4 

1 2 3 
4 5 6 
7 8 9 
`,
    TwoDimensionalArraysInput: `Enter the number of rows and columns: 
2
3
Enter the elements of the array: 
1 2 3
4 5 6
The elements of the array are: 
[1, 2, 3]
[4, 5, 6]
[[1, 2, 3], [4, 5, 6]]`,
    JaggedArray: `Enter the number of rows: 
2
Enter the number of columns for row 1: 
2
Enter the elements for row 1: 
1 2
Enter the number of columns for row 2: 
3
Enter the elements for row 2: 
3 4 5
The jagged array is: 
[1, 2]
[3, 4, 5]
[[1, 2], [3, 4, 5]]`
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('TwoDimensionalArrays', document.querySelector('.file-btn'));
};
