// Data specific to the MAP folder
const codeFiles = {
    MapDemo: `import java.util.HashMap;
import java.util.Map;

public class MapDemo {

    public static void main(String[] args) {
        Map<String, Integer> menu = new HashMap<>();

        menu.put("Burger", 50);
        menu.put("Pizza", 100);
        menu.put("Coke", 30);
        menu.put("Fries", 20);
        menu.put("Ice Cream", 40);

        System.out.println("Menu: " + menu);

        if (menu.containsKey("Pizza")) {
            System.out.println("Price of Pizza: " + menu.get("Pizza"));
        }

        // Iterating over keys
        //Way-1
        for (String key : menu.keySet()) {
            System.out.println("Item: " + key + ", Price: " + menu.get(key));
        }

        // Iterating over values
        //Way-2
        for (Integer value : menu.values()) {
            System.out.println("Price: " + value);
        }

        // Iterating over keys and values
        //Way-3
        for (Map.Entry<String, Integer> entry : menu.entrySet()) {
            System.out.println("Item: " + entry.getKey() + ", Price: " + entry.getValue());
        }

        // Removing an item
        menu.remove("Coke");
        System.out.println("Menu after removing Coke: " + menu);
    }
}`
};

const outputData = {
    MapDemo: `Menu: {Coke=30, Burger=50, Pizza=100, Fries=20, Ice Cream=40}
Price of Pizza: 100
Item: Coke, Price: 30
Item: Burger, Price: 50
Item: Pizza, Price: 100
Item: Fries, Price: 20
Item: Ice Cream, Price: 40
Price: 30
Price: 50
Price: 100
Price: 20
Price: 40
Item: Coke, Price: 30
Item: Burger, Price: 50
Item: Pizza, Price: 100
Item: Fries, Price: 20
Item: Ice Cream, Price: 40
Menu after removing Coke: {Burger=50, Pizza=100, Fries=20, Ice Cream=40}`
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('MapDemo', document.querySelector('.file-btn'));
};