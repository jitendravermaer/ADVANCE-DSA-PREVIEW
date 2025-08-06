// graph.js

const codeFiles = {
    GraphUsingAdjMatrix: `import java.util.Arrays;

public class GraphUsingAdjMatrix {

    private final boolean adjMatrix[][];
    private final int numVertices;

    public GraphUsingAdjMatrix(int numVertices) {
        this.numVertices = numVertices;
        adjMatrix = new boolean[numVertices][numVertices];
    }

    public void addEdge(int i, int j) {
        adjMatrix[i][j] = true;
        adjMatrix[j][i] = true;
    }

    public void removeEdge(int i, int j) {
        adjMatrix[i][j] = false;
        adjMatrix[j][i] = false;
    }

    public String toString() {
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < numVertices; i++) {
            s.append(i + ": ");
            for (boolean j : adjMatrix[i]) {
                s.append((j ? 1 : 0) + " ");
            }
            s.append("\n");
        }
        return s.toString();
    }
}`,
    GraphUsingEdgeList: `import java.util.LinkedList;
import java.util.List;
import java.util.stream.IntStream;

public class GraphUsingEdgeList {

    private final int numVertices;
    private final List<Integer>[] adjList;

    public GraphUsingEdgeList(int numVertices) {
        this.numVertices = numVertices;
        adjList = new LinkedList[numVertices];
        IntStream.range(0, numVertices).forEach(i -> adjList[i] = new LinkedList<>());
    }

    public void addEdge(int i, int j) {
        adjList[i].add(j);
        adjList[j].add(i);
    }

    public String toString() {
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < numVertices; i++) {
            s.append(i + ": ");
            for (int j : adjList[i]) {
                s.append(j + " ");
            }
            s.append("\n");
        }
        return s.toString();
    }
}`,
    GraphMain: `public class GraphMain {

    public static void main(String[] args) {
        // Using Adjacency Matrix
        System.out.println("Graph using Adjacency Matrix:");
        GraphUsingAdjMatrix adjMatrixGraph = new GraphUsingAdjMatrix(4);
        adjMatrixGraph.addEdge(0, 1);
        adjMatrixGraph.addEdge(0, 2);
        adjMatrixGraph.addEdge(1, 2);
        adjMatrixGraph.addEdge(2, 3);
        System.out.println(adjMatrixGraph.toString());
        
        // Using Edge List
        System.out.println("Graph using Edge List:");
        GraphUsingEdgeList edgeListGraph = new GraphUsingEdgeList(4);
        edgeListGraph.addEdge(0, 1);
        edgeListGraph.addEdge(0, 2);
        edgeListGraph.addEdge(1, 2);
        edgeListGraph.addEdge(2, 3);
        System.out.println(edgeListGraph.toString());
    }
}`
};

const outputData = {
    GraphUsingAdjMatrix: `This file contains the class definition for a graph using an adjacency matrix. Run GraphMain.java to see the output.`,
    GraphUsingEdgeList: `This file contains the class definition for a graph using an edge list. Run GraphMain.java to see the output.`,
    GraphMain: `Graph using Adjacency Matrix:
0: 0 1 1 0 
1: 1 0 1 0 
2: 1 1 0 1 
3: 0 0 1 0 
Graph using Edge List:
0: 1 2 
1: 0 2 
2: 0 1 3 
3: 2 `
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
    showCode('GraphMain', document.querySelector('.file-btn'));
};
