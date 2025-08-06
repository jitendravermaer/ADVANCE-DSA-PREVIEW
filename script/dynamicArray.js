// Data specific to the DYNAMIC ARRAY folder
const codeFiles = {
    DynamicArray: `import java.util.Arrays;

public class DynamicArray {

    private int arr[];
    private int currentSize;
    private int capacity;
    private static final int DEFAULT = 10;

    public DynamicArray() {
        arr = new int[DEFAULT];
        currentSize = 0;
        capacity = DEFAULT;
    }

    public DynamicArray(int cap) {
        arr = new int[cap];
        currentSize = 0;
        capacity = cap;
    }

    public void add(int element) {
        if (currentSize == capacity) {
            capacity *= 2;
            arr = Arrays.copyOf(arr, capacity);
        }
        arr[currentSize++] = element;
    }

    public void remove(int index) {
        if (index < 0 || index >= currentSize) {
            throw new IndexOutOfBoundsException();
        }
        for (int i = index; i < currentSize - 1; i++) {
            arr[i] = arr[i + 1];
        }
        currentSize--;
    }

    public int get(int index) {
        if (index < 0 || index >= currentSize) {
            throw new IndexOutOfBoundsException();
        }
        return arr[index];
    }

    public int getCapacity() {
        return capacity;
    }

    public int size() {
        return currentSize;
    }

}`,
    DynamicArrayDemo: `public class DynamicArrayDemo {

    public static void main(String[] args) {
        DynamicArray arr = new DynamicArray();
        arr.add(10);
        arr.add(20);
        arr.add(30);
        arr.add(40);
        arr.add(50);
        arr.add(60);
        arr.add(70);
        arr.add(80);
        arr.add(90);
        arr.add(100);

        System.out.println("Size: " + arr.size());
        System.out.println("Capacity: " + arr.getCapacity());
        arr.add(110);
        arr.remove(0);
        arr.add(120);

        System.out.println();
        for (int i = 0; i < arr.size(); i++) {
            System.out.print(arr.get(i) + " ");
        }
    }
}`
};

const outputData = {
    DynamicArray: `// This file defines the DynamicArray class.
// Run DynamicArrayDemo.java to see it in action.`,
    DynamicArrayDemo: `Size: 10
Capacity: 10

10 20 30 40 50 60 70 80 90 100 
Size: 10
Capacity: 20
20 30 40 50 60 70 80 90 100 110 120 `
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('DynamicArray', document.querySelector('.file-btn'));
};
