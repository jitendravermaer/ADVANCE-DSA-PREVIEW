// Data specific to the STACK folder
const codeFiles = {
    StackDemo: `import java.util.Stack;

public class StackDemo {

    public static void main(String[] args) {
        Stack<String> books = new Stack<>();
        books.push("C++");
        books.push("Java");
        books.push("Python");

        System.out.println(books);
        System.out.println("Top book: " + books.peek());
        System.out.println("Number of books: " + books.size());
    }
}`,
    StackUsingArray: `public class StackUsingArray {

    protected int[] data;
    protected int top;

    public static final int DEFAULT_CAPACITY = 10;

    StackUsingArray() {
        data = new int[DEFAULT_CAPACITY];
        top = -1;
    }

    StackUsingArray(int capacity) throws Exception {
        if (capacity < 1) {
            throw new Exception("Invalid Capacity");
        }
        data = new int[capacity];
        top = -1;
    }

    public int getSize() {
        return top + 1;
    }

    public boolean isEmpty() {
        return getSize() == 0;
    }

    public boolean isFull() {
        return getSize() == data.length;
    }

    public void push(int item) throws Exception {
        if (getSize() == data.length) {
            throw new Exception("Stack is Full");
        }
        data[++top] = item;
    }

    public int pop() throws Exception {
        if (getSize() == 0) {
            throw new Exception("Stack is Empty");
        }
        return data[top--];
    }

    public int peek() throws Exception {
        if (getSize() == 0) {
            throw new Exception("Stack is Empty");
        }
        return data[top];
    }

    public void display() {
        for (int i = top; i >= 0; i--) {
            System.out.print(data[i] + " ");
        }
        System.out.println();
    }
}`,
    StackUsingArrayMain: `public class StackUsingArrayMain {

    public static void main(String[] args) throws Exception {

        StackUsingArray stack = new StackUsingArray();
        // StackUsingArray stack = new StackUsingArray(5);
        try {
            stack.push(10);
            stack.push(20);
            stack.push(30);
            stack.push(40);
            stack.push(50);
            stack.push(60);
            stack.push(70);
            stack.push(80);

            stack.display();
            System.out.println(stack.pop());
            stack.display();
            System.out.println(stack.peek());
            stack.display();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        while (!stack.isEmpty()) {
            int top = stack.peek();
            System.out.println(top);
            stack.pop();
        }

        stack.display();

    }
}`,
    DynamicStack: `public class DynamicStack extends StackUsingArray {

    //ArrayList or LinkedList
    public DynamicStack() throws Exception {
        this(DEFAULT_CAPACITY);
    }

    public DynamicStack(int capacity) throws Exception {
        super(capacity);
    }

    public void push(int value) throws Exception {
        if (getSize() == data.length) {
            int[] arr = new int[2 * this.data.length];
            for (int i = 0; i < this.getSize(); i++) {
                arr[i] = this.data[i];
            }
            data = arr;
        }
        super.push(value);
    }
}`
};

const outputData = {
    StackDemo: `[C++, Java, Python]
Top book: Python
Number of books: 3`,
    StackUsingArray: `// This is a class definition.
// Run StackUsingArrayMain.java to see it in action.`,
    StackUsingArrayMain: `80 70 60 50 40 30 20 10 
80
70 60 50 40 30 20 10 
70
70 60 50 40 30 20 10 
70
60
50
40
30
20
10
`,
    DynamicStack: `// This is a class definition that extends StackUsingArray.
// It provides a dynamic resizing push method.
// You would need to create a main method to demonstrate its functionality.`
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('StackDemo', document.querySelector('.file-btn'));
};