import {RowInterface} from './row.interface';

export abstract class TableAbstract {
    protected headers: string[];
    protected filters: string[];
    protected rowsToShow: RowInterface[];
    protected allRows: number;
    protected currentPage = 1;
    protected rowsPerPage = 10;

    protected constructor() {
        this.setHeaders();
        this.setFilters();
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

    setFilters() {
        this.filters = this.headers;
    }

    addHeader(header: string, position: number): void {
        this.headers.splice(position, 0, header);
    }

    removeHeader(header: string): void {
        const indexToRemoved = this.headers.indexOf(header);

        if (indexToRemoved === -1) {
            throw new Error('Table: cant find ' + header + ' header to removed.');
        }

        this.headers.splice(indexToRemoved, 1);
    }

    addFilter(filter: string, position: number): void {
        this.filters.splice(position, 0, filter);
    }

    removeFilter(filter: string): void {
        const indexToRemoved = this.filters.indexOf(filter);

        if (indexToRemoved === -1) {
            throw new Error('Table: cant find ' + filter + ' filter to removed.');
        }

        this.filters.splice(indexToRemoved, 1);
    }
}
