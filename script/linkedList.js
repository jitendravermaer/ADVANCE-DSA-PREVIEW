// Data specific to the LINKED LIST folder
const codeFiles = {
    LinkedListDemo: `import java.util.*;

public class LinkedListDemo {

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>();
        list.addFirst(3);
        list.add(1);
        list.add(2);
        list.add(4);
        list.addLast(8);
        list.add(2, 15);
        System.err.println(list);
        System.err.println(list.toString());

        List<Integer> list2 = new ArrayList<>();
        list.add(25);
        list2.addAll(list);
        System.err.println(list2);
    }
}`
};

const outputData = {
    LinkedListDemo: `[3, 1, 15, 2, 4, 8]
[3, 1, 15, 2, 4, 8]
[3, 1, 15, 2, 4, 8, 25]`
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('LinkedListDemo', document.querySelector('.file-btn'));
};