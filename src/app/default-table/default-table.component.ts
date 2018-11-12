import {Component, OnInit} from '@angular/core';
import {TableAbstract} from '../table/table.abstract';
import {DefaultRowsService} from './default-rows.service';
import {DefaultRowModel} from './default-row.model';

@Component({
    selector: 'app-default-table',
    templateUrl: './default-table.component.html',
    styleUrls: ['./default-table.component.css']
})
export class DefaultTableComponent extends TableAbstract implements OnInit {
    protected rowsToShow: DefaultRowModel[];

    constructor(protected service: DefaultRowsService) {
        super();
    }

    ngOnInit() {
        this.allRows = this.service.countRows();
        this.showRows();
        this.setHeaders();
    }

    setHeaders(): void {
        // this.headers = this.rowsToShow[0].getHeaders();
        this.headers = ['Id', 'Type', 'Description', 'Active', 'Created At'];
    }

    showRows(start = 0): void {
        this.rowsToShow = this.service.getRows(this.rowsPerPage, start);
    }

}
