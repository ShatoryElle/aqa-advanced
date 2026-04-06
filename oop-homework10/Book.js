export class Book {

    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.error("Назва має бути непустим рядком");
            return;
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string') {
            console.error("Автор має бути рядком");
            return;
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== 'number' || value > currentYear) {
            console.error("Рік видання вказано некоректно");
            return;
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Назва: "${this._title}", Автор: ${this._author}, Рік: ${this._year}`);

    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) return null;
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}