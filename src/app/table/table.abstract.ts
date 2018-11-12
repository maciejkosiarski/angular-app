import {Row} from './row.model';

export abstract class TableComponent {
    protected headers: string[];
    protected rowsToShow: Row[];
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
}
