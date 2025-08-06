// kruskals.js

const codeFiles = {
    KruskalsAlgo: `import java.util.*;

class KruskalsAlgo {

    static class Edge {
        int src, dest, weight;
        public Edge(int src, int dest, int weight) {
            this.src = src;
            this.dest = dest;
            this.weight = weight;
        }
    }

    static int[] parent;
    static int[] rank;

    public static void createGraph(ArrayList<Edge> graph) {
        // Edge: (source, destination, weight)
        graph.add(new Edge(0, 1, 10));
        graph.add(new Edge(0, 2, 6));
        graph.add(new Edge(0, 3, 5));
        graph.add(new Edge(1, 3, 15));
        graph.add(new Edge(2, 3, 4));
    }

    static int kruskal(int V, int E, ArrayList<Edge> graph) {
        Collections.sort(graph, Comparator.comparingInt(e -> e.weight));
        parent = new int[V];
        rank = new int[V];
        for (int i = 0; i < V; i++) {
            parent[i] = i;
            rank[i] = 0;
        }

        int mstCost = 0;
        int edgeCount = 0;
        for (int i = 0; i < E && edgeCount < V - 1; i++) {
            Edge currentEdge = graph.get(i);
            int rootSrc = find(currentEdge.src);
            int rootDest = find(currentEdge.dest);
            if (rootSrc != rootDest) {
                union(rootSrc, rootDest);
                mstCost += currentEdge.weight;
                edgeCount++;
            }
        }
        return mstCost;
    }

    static int find(int i) {
        if (parent[i] == i) {
            return i;
        }
        return parent[i] = find(parent[i]);
    }

    static void union(int i, int j) {
        int rootI = find(i);
        int rootJ = find(j);
        if (rank[rootI] < rank[rootJ]) {
            parent[rootI] = rootJ;
        } else if (rank[rootI] > rank[rootJ]) {
            parent[rootJ] = rootI;
        } else {
            parent[rootJ] = rootI;
            rank[rootI]++;
        }
    }

    public static void main(String[] args) {
        int V = 4;
        int E = 5;
        ArrayList<Edge> graph = new ArrayList<>();
        createGraph(graph);

        int mstCost = kruskal(V, E, graph);
        System.out.println("Cost of the Minimum Spanning Tree: " + mstCost);
    }
}`
};

const outputData = {
    KruskalsAlgo: `Cost of the Minimum Spanning Tree: 19`
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
    showCode('KruskalsAlgo', document.querySelector('.file-btn'));
};
