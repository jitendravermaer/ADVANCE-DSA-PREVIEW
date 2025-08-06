// Data specific to the DEQUE folder
const codeFiles = {
    DequeDemo: `import java.util.ArrayDeque;

public class DequeDemo {

    public static void main(String[] args) {
        ArrayDeque<Integer> dq = new ArrayDeque<>();

        dq.offer(15);
        dq.offerFirst(10);
        dq.offerLast(20);
        dq.offer(30);

        System.out.println("Dequeued elements from front: " + dq);
        System.out.println("Peek at the front: " + dq.peekFirst());
        System.out.println("Peek at the rear: " + dq.peekLast());
        System.out.println("Removed element from front: " + dq.pollFirst());
        System.out.println("Dequeued elements from front: " + dq);
        System.out.println("Removed element from rear: " + dq.pollLast());
        System.out.println("Dequeued elements from front: " + dq);

    }
}`
};

const outputData = {
    DequeDemo: `Dequeued elements from front: [10, 15, 20, 30]
Peek at the front: 10
Peek at the rear: 30
Removed element from front: 10
Dequeued elements from front: [15, 20, 30]
Removed element from rear: 30
Dequeued elements from front: [15, 20]`
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('DequeDemo', document.querySelector('.file-btn'));
};