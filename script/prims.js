// prims.js

const codeFiles = {
    PrimsAlgo: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

class PrimsAlgo {

    static int spanningTree(int V, int E, ArrayList<ArrayList<ArrayList<Integer>>> graph) {
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        int[] key = new int[V];
        boolean[] inMST = new boolean[V];
        Arrays.fill(key, Integer.MAX_VALUE);

        key[0] = 0;
        pq.add(new int[]{0, 0}); // {node, weight}

        int mstCost = 0;

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int u = current[0];
            int weight = current[1];

            if (inMST[u]) {
                continue;
            }

            inMST[u] = true;
            mstCost += weight;

            for (ArrayList<Integer> edge : graph.get(u)) {
                int v = edge.get(0);
                int edgeWeight = edge.get(1);
                if (!inMST[v] && edgeWeight < key[v]) {
                    key[v] = edgeWeight;
                    pq.add(new int[]{v, key[v]});
                }
            }
        }
        return mstCost;
    }

    public static void main(String[] args) {
        int V = 4;
        int E = 5;
        ArrayList<ArrayList<ArrayList<Integer>>> graph = new ArrayList<>(V);
        for (int i = 0; i < V; i++) {
            graph.add(new ArrayList<>());
        }

        // Adjacency List: {destination, weight}
        graph.get(0).add(new ArrayList<>(Arrays.asList(1, 10)));
        graph.get(0).add(new ArrayList<>(Arrays.asList(2, 6)));
        graph.get(0).add(new ArrayList<>(Arrays.asList(3, 5)));
        graph.get(1).add(new ArrayList<>(Arrays.asList(0, 10)));
        graph.get(1).add(new ArrayList<>(Arrays.asList(3, 15)));
        graph.get(2).add(new ArrayList<>(Arrays.asList(0, 6)));
        graph.get(2).add(new ArrayList<>(Arrays.asList(3, 4)));
        graph.get(3).add(new ArrayList<>(Arrays.asList(0, 5)));
        graph.get(3).add(new ArrayList<>(Arrays.asList(1, 15)));
        graph.get(3).add(new ArrayList<>(Arrays.asList(2, 4)));

        int mstCost = spanningTree(V, E, graph);
        System.out.println("Cost of the Minimum Spanning Tree: " + mstCost);
    }
}`
};

const outputData = {
    PrimsAlgo: `Cost of the Minimum Spanning Tree: 19`
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
    showCode('PrimsAlgo', document.querySelector('.file-btn'));
};
