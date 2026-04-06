import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book("Тигролови", "Іван Багряний", 1944);
const book2 = new Book("Місто", "Валер'ян Підмогильний", 1928);
const book3 = new Book("Інтернат", "Сергій Жадан", 2017);

console.log("--- Інформація про паперові книги ---");
book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook("Кайдашева сім'я", "Іван Нечуй-Левицький", 1878, "PDF");

console.log("\n--- Інформація про електронну книгу ---");
ebook1.printInfo();

console.log("\n--- Зміна назви через сеттер ---");
book1.title = "Сад Гетсиманський";
console.log(`Нова назва: ${book1.title}`);

const library = [book1, book2, book3, ebook1];
const oldest = Book.findOldestBook(library);

console.log("\n--- Найдавніша книга в бібліотеці ---");
oldest.printInfo();

const convertedEbook = EBook.fromBook(book2, "EPUB");
console.log("\n--- Конвертована книга ---");
convertedEbook.printInfo();