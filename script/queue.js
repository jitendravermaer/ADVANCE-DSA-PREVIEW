// Data specific to the QUEUE folder
const codeFiles = {
    QueueDemo: `import java.util.LinkedList;
import java.util.Queue;

public class QueueDemo {

    public static void main(String[] args) {
        Queue<Integer> Q = new LinkedList<>();

        Q.add(1);
        Q.add(2);
        Q.add(3);
        Q.add(4);

        System.out.println("Queue: " + Q);
        System.out.println("First element: " + Q.peek());

        Q.poll();
        System.out.println("Queue after removing first element: " + Q);
        System.out.println("Queue size: " + Q.size());
        System.out.println(Q.isEmpty());

        while (!Q.isEmpty()) {
            Q.poll();
        }
        System.out.println("Queue after removing all elements: " + Q);

    }
}`,
    QueueUsingFixedSizeArray: `public class QueueUsingFixedSizeArray {

    protected int[] arr;
    protected int size;
    protected int front;
    public static final int DEFAULT_CAPACITY = 10;

    public QueueUsingFixedSizeArray() throws Exception {
        this(DEFAULT_CAPACITY);
    }

    public QueueUsingFixedSizeArray(int capacity) throws Exception {
        if (capacity < 1) {
            throw new Exception("Invalid capacity");
        }
        this.arr = new int[capacity];
        this.size = 0;
        this.front = 0;
    }

    public void enqueue(int value) throws Exception {
        if (this.size == this.arr.length) {
            throw new Exception("Queue is full");
        }
        int rearIndex = (this.front + this.size) % this.arr.length;
        this.arr[rearIndex] = value;
        this.size++;
    }

    public int dequeue() throws Exception {
        if (this.size == 0) {
            throw new Exception("Queue is empty");
        }
        int value = this.arr[this.front];
        this.arr[this.front] = 0;
        this.front = (this.front + 1) % this.arr.length;
        this.size--;
        return value;
    }

    public int front() throws Exception {
        if (this.size == 0) {
            throw new Exception("Queue is empty");
        }
        return this.arr[this.front];
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size() == 0;
    }

    public boolean isFull() {
        return this.size() == this.arr.length;
    }

    public void display() {
        for (int i = 0; i < this.size; i++) {
            int index = (this.front + i) % this.arr.length;
            System.out.print(this.arr[index] + " ");
        }
        System.out.println();
    }
}`,
    QueueUsingFixedSizeArrayMain: `public class QueueUsingFixedSizeArrayMain {

    public static void main(String[] args) {
        try {
            QueueUsingFixedSizeArray Q = new QueueUsingFixedSizeArray(5);
            Q.enqueue(10);
            Q.enqueue(20);
            Q.enqueue(30);
            Q.enqueue(40);
            Q.enqueue(50);

            Q.display();

            System.out.println(Q.dequeue());
            System.out.println(Q.dequeue());

            Q.display();

            System.out.println(Q.front());
            System.out.println(Q.size());
            System.out.println(Q.isEmpty());
            System.out.println(Q.isFull());

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}`,
    DynamicQueue: `public class DynamicQueue extends QueueUsingFixedSizeArray {

    public DynamicQueue() throws Exception {
        this(DEFAULT_CAPACITY);
    }

    public DynamicQueue(int capacity) throws Exception {
        super(capacity);
    }

    public void enqueue(int value) {
        if (this.size == this.arr.length) {
            int[] oldArr = this.arr;
            this.arr = new int[2 * oldArr.length];
            for (int i = 0; i < oldArr.length; i++) {
                int index = (this.front + i) % oldArr.length;
                this.arr[i] = oldArr[index];
            }
            this.front = 0;
        }
        int rearIndex = (this.front + this.size) % this.arr.length;
        this.arr[rearIndex] = value;
        this.size++;
    }

    public static void main(String[] args) {
        try {
            DynamicQueue Q = new DynamicQueue(5);
            Q.enqueue(1000);
            Q.enqueue(2000);
            Q.enqueue(3000);
            Q.enqueue(4000);
            Q.enqueue(5000);

            Q.display();

            System.out.println(Q.dequeue());
            System.out.println(Q.dequeue());

            Q.display();

            Q.enqueue(6000);
            Q.enqueue(7000);
            Q.enqueue(8000);

            System.out.println(Q.front());
            System.out.println(Q.size());
            System.out.println(Q.isEmpty());
            System.out.println(Q.isFull());

            Q.display();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}`
};

const outputData = {
    QueueDemo: `Queue: [1, 2, 3, 4]
First element: 1
Queue after removing first element: [2, 3, 4]
Queue size: 3
false
Queue after removing all elements: []`,
    QueueUsingFixedSizeArray: `// This is a class definition.
// Run QueueUsingFixedSizeArrayMain.java to see it in action.`,
    QueueUsingFixedSizeArrayMain: `10 20 30 40 50 
10
20
30 40 50 
30
3
false
true`,
    DynamicQueue: `1000 2000 3000 4000 5000 
1000
2000
3000 4000 5000 
3000
5
false
true
3000 4000 5000 6000 7000 `
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('QueueDemo', document.querySelector('.file-btn'));
};