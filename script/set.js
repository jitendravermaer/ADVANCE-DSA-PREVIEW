// Data specific to the SET folder
const codeFiles = {
    SetDemo: `import java.util.HashSet;
import java.util.Set;

public class SetDemo {

    public static void main(String[] args) {
        Set<Integer> s = new HashSet<>();

        s.add(10);
        s.add(30);
        s.add(20);
        s.add(15);
        s.add(78);
        s.add(15);

        System.out.println("Set: " + s);
        System.out.println(s.contains(15));

        // add, remove, contains
    }
}`,
    CustomClass: `import java.util.HashSet;
import java.util.Set;

class Book {

    int isbn;
    String title;
    int price;

    public Book(String title, int isbn, int price) {
        this.title = title;
        this.isbn = isbn;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Book{"
                + "isbn=" + isbn
                + ", title='" + title + '\''
                + ", price=" + price
                + '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Book book = (Book) o;
        return isbn == book.isbn;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(isbn);
    }

}

public class CustomClass {

    public static void main(String[] args) {
        Set<Book> books = new HashSet<>();

        books.add(new Book("C++", 1, 2000));
        books.add(new Book("Java", 2, 2001));
        books.add(new Book("Python", 1, 2000));

        System.out.println(books);
        System.out.println(books.contains(new Book("Java", 2, 2001)));
        System.out.println(books.size());
    }
}`
};

const outputData = {
    SetDemo: `Set: [20, 15, 10, 30, 78]
true`,
    CustomClass: `[Book{isbn=1, title='C++', price=2000}, Book{isbn=2, title='Java', price=2001}]
true
2`
};

// Initialize the editor with the specific data and show the first file.
window.onload = () => {
    initEditor(codeFiles, outputData);
    showCode('SetDemo', document.querySelector('.file-btn'));
};