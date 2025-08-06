// sorting.js

const codeFiles = {
    BubbleSort: `public class BubbleSort {

    static void bubbleSort(int[] a) {
        int n = a.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false; //has any swapping happened
            for (int j = 0; j < n - i - 1; j++) {
                // last i elements are already sorted
                if (a[j] > a[j + 1]) {
                    // swap arr[j+1] and arr[i]
                    swapped = true;
                    int temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
            if (!swapped) { // have any swapped happened?
                return;
            }
        }
    }

    public static void main(String[] args) {
        int[] a = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(a);
        System.out.println("Sorted array");
        for (int i : a) {
            System.out.print(i + " ");
        }
    }
}`,
    InsertionSort: `public class InsertionSort {

    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int j = i;
            while (j > 0 && arr[j] < arr[j - 1]) {
                int temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        System.out.println("Sorted array: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}`,
    SelectionSort: `public class SelectionSort {

    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 4, 3, 2, 1};
        selectionSort(arr);
        System.out.println("Sorted array:");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}`,
    MergeSort: `// Time space for Merge Sort is O(nlogn) and O(n) respectively.
// Merge Sort is a divide and conquer algorithm.
import java.util.Arrays;

public class MergeSort {

    static void merge(int[] arr, int left, int mid, int right) {
        int i, j, k;

        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        i = 0;
        j = 0;
        k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) {
            arr[k++] = L[i++];
        }

        while (j < n2) {
            arr[k++] = R[j++];
        }
    }

    static void mergeSort(int[] arr, int l, int r) {
        if (l >= r) {
            return;
        }

        int mid = (l + r) / 2;

        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);

        merge(arr, l, mid, r);
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}`,
    QuickSort: `//Time and Space Complexity: O(nlogn) and O(logn) respectively
//Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.
import java.util.Arrays;

public class QuickSort {

    static int partition(int[] arr, int start, int end) {
        int pivot = arr[start];
        int cnt = 0;
        for (int i = start; i <= end; i++) {
            if (arr[i] < pivot) {
                cnt++;
            }
        }
        int pIndex = start + cnt;
        swap(arr, pIndex, start);

        int i = start, j = end;
        while (i < pIndex && j > pIndex) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i < pIndex && j > pIndex) {
                swap(arr, i, j);
                i++;
                j--;
            }
        }

        return pIndex;
    }

    static void quickSort(int[] arr, int start, int end) {
        if (start < end) {
            int pIndex = partition(arr, start, end);
            quickSort(arr, start, pIndex - 1);
            quickSort(arr, pIndex + 1, end);
        }
    }

    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static void displayArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr, 0, arr.length - 1);
        displayArr(arr);
    }
}`,
    CountSort: `public class CountSort {
    static void countSort(int arr[], int n) {
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        int count[] = new int[max + 1];
        for (int i = 0; i < n; i++) {
            count[arr[i]]++;
        }

        int index = 0;
        for (int i = 0; i <= max; i++) {
            for (int j = 0; j < count[i]; j++) {
                arr[index++] = i;
            }
        }

    }

    static void displayArr(int arr[]) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // int arr[] = { 121, 11, 45, 66, 23, 11, 90 };
        int arr[] = { 4, 2, 2, 8, 3, 3, 1, 5, 8, 8, 5, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9 };
        int n = arr.length;
        countSort(arr, n);
        displayArr(arr);
    }
}`,
    RadixSort: `public class RadixSort {
    static void radixSort(int[] arr) {
        int max = getMax(arr);
        for (int exp = 1; max / exp > 0; exp *= 10) {
            countSort(arr, exp);
        }
    }

    static int getMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    static void countSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];

        int[] count = new int[10];

        for (int i = 0; i < n; i++) {
            count[(arr[i] / exp) % 10]++;
        }

        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }

        for (int i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        radixSort(arr);
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}`,
    BucketSort: `import java.util.ArrayList;
import java.util.Collections;

public class BucketSort {
    static void bucketSort(double[] arr) {
        int n = arr.length;
        
        // Buckets
        ArrayList<Double>[] buckets = new ArrayList[n];

        // Create empty buckets
        for (int i = 0; i < n; i++) {
            buckets[i] = new ArrayList<Double>();
        }

        // Add elements into the buckets
        for (int i = 0; i < n; i++) {
            int index = (int) (n * arr[i]);
            buckets[index].add(arr[i]);
        }

        // Sort the elements of each bucket
        for (ArrayList<Double> bucket : buckets) {
            Collections.sort(bucket);
        }

        // Get the sorted array
        int index = 0;
        for (ArrayList<Double> bucket : buckets) {
            for (int j = 0; j < bucket.size(); j++) {
                arr[index++] = bucket.get(j);
            }
        }
    }

    static void displayArr(double[] arr) {
        for (double i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        double[] arr = { 0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51 };
        bucketSort(arr);
        displayArr(arr);
    }
}`,
    Problem1: `// Given an integer array arr, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note: You must do this in-place without making a copy of the array.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Time Complexity: O(n^2)
// Space Complexity: O(1)
public class Problem1 {

    public static void moveZeroes(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] == 0 && arr[j + 1] != 0) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};
        // int[] arr = {0, 0, 0, 0, 0, 0, 0, 0, 0, 1};

        System.out.println("Array before moving zeroes to the end:");
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();

        moveZeroes(arr);
        System.out.println("Array after moving zeroes to the end:");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}`,
    Problem2: `// Given an array of names of the fruits; you are supposed to sort the fruitay in lexicographical order using the selection sort algorithm.

// Input = {"Apple", "Banana", "Kiwi", "Mango", "Pineapple", "Orange", "Grapes", "Strawberry", "Peach", "Watermelon"};
// Output = {"Apple", "Banana", "Grapes", "Kiwi", "Mango", "Orange", "Peach", "Pineapple", "Strawberry", "Watermelon"};
public class Problem2 {

    public static void sortFruits(String[] fruits) {
        for (int i = 0; i < fruits.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < fruits.length; j++) {
                if (fruits[j].compareTo(fruits[minIndex]) < 0) {
                    minIndex = j;
                }
            }
            String temp = fruits[minIndex];
            fruits[minIndex] = fruits[i];
            fruits[i] = temp;
        }
    }

    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Kiwi", "Mango", "Pineapple", "Orange", "Grapes", "Strawberry", "Peach", "Watermelon"};
        System.out.println("Original fruits : ");
        System.out.print("[ ");

        for (String fruit : fruits) {
            System.out.print(fruit + ", ");
        }
        System.out.println("]");

        sortFruits(fruits);
        System.out.println("Sorted fruits : ");
        System.out.print("[ ");

        for (String fruit : fruits) {
            System.out.print(fruit + ", ");
        }
        System.out.println("]");
    }
}`,
    Problem3: `// Given an array where all its elements are sorted in increasing order but are rotated clockwise k times. Find the value of k.

// The number of rotations is equal to the index of the minimum element.
// Example: {11, 12, 15, 18, 2, 5, 6, 8}
// Output: 4
public class Problem3 {

    public static int findRotations(int[] arr) {
        int minIndex = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        return minIndex;
    }

    public static void main(String[] args) {
        int[] arr = {11, 12, 15, 18, 2, 5, 6, 8};
        System.out.println("The array is rotated " + findRotations(arr) + " times.");
    }
}`,
    Problem4: `// Given an array of positive integers. We have to find the sum of all elements that are strictly greater than their immediate predecessor.

// Input: {10, 20, 7, 30, 25, 40}
// Output: 60 (20 + 30 + 40)
public class Problem4 {

    public static int findSum(int[] arr) {
        int sum = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                sum += arr[i];
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 7, 30, 25, 40};
        System.out.println("The sum of elements greater than their predecessor is: " + findSum(arr));
    }
}`,
    Problem5: `// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}
public class Problem5 {

    public static void sort012(int[] arr) {
        int low = 0;
        int mid = 0;
        int high = arr.length - 1;

        while (mid <= high) {
            switch (arr[mid]) {
                case 0:
                    swap(arr, low, mid);
                    low++;
                    mid++;
                    break;
                case 1:
                    mid++;
                    break;
                case 2:
                    swap(arr, mid, high);
                    high--;
                    break;
            }
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 2, 0, 1, 2};
        sort012(arr);
        System.out.println("Sorted array: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}`
};

const outputData = {
    BubbleSort: `Sorted array
11 12 22 25 34 64 90 `,
    InsertionSort: `Sorted array: 
5 6 11 12 13 `,
    SelectionSort: `Sorted array:
1 2 3 4 5 `,
    MergeSort: `[5, 6, 7, 11, 12, 13]`,
    QuickSort: `11 12 22 25 34 64 90 `,
    CountSort: `0 1 1 2 2 2 3 3 3 4 4 4 5 5 5 6 7 8 8 8 9 9 `,
    RadixSort: `2 24 45 66 75 90 170 802 `,
    BucketSort: `0.32 0.33 0.37 0.42 0.47 0.51 0.52 `,
    Problem1: `Array before moving zeroes to the end:
0 1 0 3 12 
Array after moving zeroes to the end:
1 3 12 0 0 `,
    Problem2: `Original fruits : 
[ Apple, Banana, Kiwi, Mango, Pineapple, Orange, Grapes, Strawberry, Peach, Watermelon, ]
Sorted fruits : 
[ Apple, Banana, Grapes, Kiwi, Mango, Orange, Peach, Pineapple, Strawberry, Watermelon, ]`,
    Problem3: `The array is rotated 4 times.`,
    Problem4: `The sum of elements greater than their predecessor is: 60`,
    Problem5: `Sorted array: 
0 0 1 1 2 2 `
};



function showCode(fileName, button) {
    const code = codeFiles[fileName] || 'Code not found.';
    const output = outputData[fileName] || 'No output available. Please add code and a main method to see output.';

    document.getElementById('fileName').textContent = fileName + '.java';

    // Update the editor with the new code
    editor.setValue(code);

    // Update the output block
    const outputBlock = document.getElementById('outputBlock');
    outputBlock.textContent = "Click 'Run Code' to see the output...";

    // Remove active class from all buttons and add to the clicked one
    const fileButtons = document.querySelectorAll('.file-btn');
    fileButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    window.runCode = () => {
        outputBlock.textContent = output;
    };
}

// Initialize the editor and display the first file on page load
// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('BubbleSort', document.querySelector('.file-btn'));
};
