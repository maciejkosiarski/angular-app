import {Component, OnInit} from '@angular/core';

import {Row} from './row.model';
import {RowsService} from './rows.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: []
})
export class TableComponent implements OnInit {
    rowsToShow: Row[];
    allRows: number;
    currentPage = 1;
    rowsPerPage = 5;

    constructor(private rowsService: RowsService) {
    }

    ngOnInit() {
        this.allRows = this.rowsService.countRows();
        this.showRows();
    }

    changePage(newPage: number) {
        this.currentPage = newPage;
        this.showRows((this.currentPage - 1) * this.rowsPerPage);
    }

    changePageSize(newSize: number) {
        this.rowsPerPage = newSize;
        this.showRows();
    }

    showRows(start = 0) {
        this.rowsToShow = this.rowsService.getRows(this.rowsPerPage, start);
    }
}
