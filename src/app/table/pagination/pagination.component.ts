import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    // @Input() currentPage: number;
    @Input() all: number;
    @Input() pageSize: number;
    @Output() sizeChanged = new EventEmitter<number>();
    @Output() pageChanged = new EventEmitter<number>();
    currentPage = 1;

    constructor() {
    }

    ngOnInit() {
    }

    pageChange(page: number) {
        this.pageChanged.emit(page);
    }
}
