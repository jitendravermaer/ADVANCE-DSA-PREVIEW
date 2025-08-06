// tree.js

const codeFiles = {
    BinaryTree: `import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class Node {

    int data;
    Node left, right;

    Node(int item) {
        data = item;
        left = right = null;
    }
}

class BinaryTree {

    static Node buildTree() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the data of the node: ");
        int data = sc.nextInt();

        if (data == -1) {
            return null;
        }

        Node root = new Node(data);

        System.out.println("Enter the left child of " + data);
        root.left = buildTree();

        System.out.println("Enter the right child of " + data);
        root.right = buildTree();

        return root;
    }

    static void preOrder(Node root) {
        if (root == null) {
            return;
        }
        System.out.print(root.data + " ");
        preOrder(root.left);
        preOrder(root.right);
    }

    static void inOrder(Node root) {
        if (root == null) {
            return;
        }
        inOrder(root.left);
        System.out.print(root.data + " ");
        inOrder(root.right);
    }

    static void postOrder(Node root) {
        if (root == null) {
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        System.out.print(root.data + " ");
    }

    static void levelOrder(Node root) {
        if (root == null) {
            return;
        }

        Queue<Node> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            Node curr = q.poll();
            System.out.print(curr.data + " ");

            if (curr.left != null) {
                q.add(curr.left);
            }

            if (curr.right != null) {
                q.add(curr.right);
            }
        }
    }

    public static void main(String[] args) {
        Node root = buildTree();
        System.out.println("PreOrder Traversal:");
        preOrder(root);
        System.out.println();
        System.out.println("InOrder Traversal:");
        inOrder(root);
        System.out.println();
        System.out.println("PostOrder Traversal:");
        postOrder(root);
        System.out.println();
        System.out.println("LevelOrder Traversal:");
        levelOrder(root);
        System.out.println();
    }
}`
};

const outputData = {
    BinaryTree: `Enter the data of the node: 
1
Enter the left child of 1
Enter the data of the node: 
2
Enter the left child of 2
Enter the data of the node: 
4
Enter the left child of 4
Enter the data of the node: 
-1
Enter the right child of 4
Enter the data of the node: 
-1
Enter the right child of 2
Enter the data of the node: 
5
Enter the left child of 5
Enter the data of the node: 
-1
Enter the right child of 5
Enter the data of the node: 
-1
Enter the right child of 1
Enter the data of the node: 
3
Enter the left child of 3
Enter the data of the node: 
-1
Enter the right child of 3
Enter the data of the node: 
6
Enter the left child of 6
Enter the data of the node: 
-1
Enter the right child of 6
Enter the data of the node: 
-1
PreOrder Traversal:
1 2 4 5 3 6 
InOrder Traversal:
4 2 5 1 3 6 
PostOrder Traversal:
4 5 2 6 3 1 
LevelOrder Traversal:
1 2 3 4 5 6 `
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
    showCode('BinaryTree', document.querySelector('.file-btn'));
};
