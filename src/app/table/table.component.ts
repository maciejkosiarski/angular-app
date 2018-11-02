import {Component, OnInit} from '@angular/core';

import {Row} from './row.model';
import {RowsService} from './rows.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    rows: Row[];

    constructor(private rowsService: RowsService) {
    }

    ngOnInit() {
        this.rows = this.rowsService.getRows();
    }
}
