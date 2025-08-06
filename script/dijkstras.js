// dijkstras.js

const codeFiles = {
    DijkstrasAlgo: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class DijkstrasAlgo {

    static int[] dijkstra(int V, ArrayList<ArrayList<ArrayList<Integer>>> adj, int S) {
        PriorityQueue<ArrayList<Integer>> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a.get(1)));
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);

        dist[S] = 0;
        ArrayList<Integer> entry = new ArrayList<>();
        entry.add(S);
        entry.add(0);
        pq.add(entry);

        while (!pq.isEmpty()) {
            ArrayList<Integer> current = pq.poll();
            int u = current.get(0);
            int d = current.get(1);

            if (d > dist[u]) {
                continue;
            }

            for (ArrayList<Integer> neighbor : adj.get(u)) {
                int v = neighbor.get(0);
                int weight = neighbor.get(1);

                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    ArrayList<Integer> newEntry = new ArrayList<>();
                    newEntry.add(v);
                    newEntry.add(dist[v]);
                    pq.add(newEntry);
                }
            }
        }
        return dist;
    }

    public static void main(String[] args) {
        int V = 5; // Number of vertices
        int S = 0; // Source vertex

        ArrayList<ArrayList<ArrayList<Integer>>> adj = new ArrayList<>(V);
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Adding edges for a sample graph
        // Edge: (source, destination, weight)
        adj.get(0).add(new ArrayList<>(Arrays.asList(1, 9)));
        adj.get(0).add(new ArrayList<>(Arrays.asList(2, 6)));
        adj.get(0).add(new ArrayList<>(Arrays.asList(3, 5)));
        adj.get(0).add(new ArrayList<>(Arrays.asList(4, 3)));
        adj.get(2).add(new ArrayList<>(Arrays.asList(1, 2)));
        adj.get(2).add(new ArrayList<>(Arrays.asList(3, 4)));

        int[] result = dijkstra(V, adj, S);

        System.out.println("Shortest distances from source " + S + ":");
        for (int i = 0; i < V; i++) {
            System.out.println("Node " + i + ": " + result[i]);
        }
    }
}`
};

const outputData = {
    DijkstrasAlgo: `Shortest distances from source 0:
Node 0: 0
Node 1: 8
Node 2: 6
Node 3: 5
Node 4: 3`
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

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('DijkstrasAlgo', document.querySelector('.file-btn'));
};
