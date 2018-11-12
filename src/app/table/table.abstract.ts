import {RowInterface} from './row.interface';

export abstract class TableAbstract {
    protected headers: string[];
    protected rowsToShow: RowInterface[];
    protected allRows: number;
    protected currentPage = 1;
    protected rowsPerPage = 10;

    protected constructor() {
    }

    abstract showRows(start: number): void;

    abstract setHeaders(): void;

    changePage(newPage: number): void {
        this.currentPage = newPage;
        this.showRows((this.currentPage - 1) * this.rowsPerPage);
    }

    changePageSize(newSize: number): void {
        this.rowsPerPage = newSize;
        this.showRows(0);
    }

    addHeader(header: string, position: number): void {
        this.headers.splice(position, 0, header);
    }

    removeHeader(header: string): void {
        const indexToRemoved = this.headers.indexOf(header);

        if (indexToRemoved === -1) {
            throw new Error('Table: cant find header to removed.');
        }

        this.headers.splice(indexToRemoved, 1);
    }

    // prettifyCamelCase(value: string = ''): string {
    //     let output = '';
    //     const len: number = value.length;
    //     let char: string;
    //
    //     for (let i = 0; i < len; i++) {
    //         char = value.charAt(i);
    //
    //         if (i === 0) {
    //             output += char.toUpperCase();
    //         } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
    //             output += ' ' + char;
    //         } else if (char === '-' || char === '_') {
    //             output += ' ';
    //         } else {
    //             output += char;
    //         }
    //     }
    //
    //     return output;
    // }
}
