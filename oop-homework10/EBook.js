import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const allowedFormats = ['PDF', 'EPUB', 'MOBI', 'FB2'];
        if (!allowedFormats.includes(value.toUpperCase())) {
            console.error("Непідтримуваний формат файлу");
            return;
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Формат: ${this._fileFormat}`);
    }

    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}