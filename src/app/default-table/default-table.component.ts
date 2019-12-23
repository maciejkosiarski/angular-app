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
    protected headers: string[];

    constructor(protected service: DefaultRowsService) {
        super();
    }

    ngOnInit() {
        this.allRows = this.service.countRows();
        this.showRows();
        // this.removeHeader('Created At');
        // this.addHeader( 'Created', 5);
        // this.removeFilter('id');
        // this.addFilter('Id number', 0);
    }

    setHeaders(): void {
        this.headers = ['Id', 'Type', 'Description', 'Active', 'Created At'];
    }

    setFilters(): void {
        const row = new DefaultRowModel(1, '', '', true, 1);
        const filters = {};
        row.getHeaders().forEach((item, i) => {
            filters[item] = '';
        });
        this.filters = filters;
    }

    showRows(start = 0, filters = {}): void {
        this.rowsToShow = this.service.getRows(this.rowsPerPage, start, filters);
    }

}
