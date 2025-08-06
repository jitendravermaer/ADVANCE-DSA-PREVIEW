// greedy.js

const codeFiles = {
    GreedyAlgo: `import java.util.Arrays;
import java.util.Comparator;

public class GreedyAlgo {
    public static void main(String[] args) {
        int[] start = { 1, 3, 0, 5, 8, 5 };
        int[] end = { 2, 4, 6, 7, 9, 9 };

        // Sorting based on end times
        int[][] activities = new int[start.length][3];
        for (int i = 0; i < start.length; i++) {
            activities[i][0] = i;
            activities[i][1] = start[i];
            activities[i][2] = end[i];
        }

        Arrays.sort(activities, Comparator.comparingDouble(o -> o[2]));

        int maxAct = 0;
        maxAct++;
        int lastEnd = activities[0][2];
        System.out.println("Activity " + activities[0][0] + ": [" + activities[0][1] + ", " + activities[0][2] + "]");

        for (int i = 1; i < end.length; i++) {
            if (activities[i][1] >= lastEnd) {
                maxAct++;
                lastEnd = activities[i][2];
                System.out.println("Activity " + activities[i][0] + ": [" + activities[i][1] + ", " + activities[i][2] + "]");
            }
        }
        System.out.println("Maximum number of activities: " + maxAct);
    }
}`,
    Problem1: `// Given N bulbes, either on (1) or off (0).
// A switch changes the state of all bulbs to its right.
// Find the minimum number of switches to turn all bulbs on.

// Input: [0, 1, 0, 1]
// Output: 4
public class Problem1 {
    public static int solve(int[] A) {
        int cost = 0;
        for (int i = 0; i < A.length; i++) {
            if (cost % 2 == 0) {
                if (A[i] == 0) {
                    cost++;
                }
            } else {
                if (A[i] == 1) {
                    cost++;
                }
            }
        }
        return cost;
    }

    public static void main(String[] args) {
        int[] A = {0, 1, 0, 1};
        System.out.println("Minimum number of switches: " + solve(A));
    }
}`,
    Problem2: `// Given an array of N integers.
// Find the highest product by multiplying 3 elements.

// Input: {1, 2, 3, 4, 5}
// Output: 60
// Input: {-10, -3, 5, 10}
// Output: 300
import java.util.Arrays;

public class Problem2 {
    public static int maxProduct(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        // Case 1: Product of three largest elements
        int product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
        // Case 2: Product of two smallest elements (which could be negative) and the largest element
        int product2 = nums[0] * nums[1] * nums[n - 1];
        return Math.max(product1, product2);
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 3, 4, 5};
        System.out.println("Highest product for {1, 2, 3, 4, 5} is: " + maxProduct(nums1));
        
        int[] nums2 = {-10, -3, 5, 10};
        System.out.println("Highest product for {-10, -3, 5, 10} is: " + maxProduct(nums2));
    }
}`
};

const outputData = {
    GreedyAlgo: `Activity 0: [1, 2]
Activity 1: [3, 4]
Activity 3: [5, 7]
Activity 4: [8, 9]
Maximum number of activities: 4`,
    Problem1: `Minimum number of switches: 4`,
    Problem2: `Highest product for {1, 2, 3, 4, 5} is: 60
Highest product for {-10, -3, 5, 10} is: 300`,
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
    showCode('GreedyAlgo', document.querySelector('.file-btn'));
};
