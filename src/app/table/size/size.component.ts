import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-size',
    templateUrl: './size.component.html',
    styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
    public currentSize: number;
    public sizes = [10, 25, 100];
    @Output() sizeChanged = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
        [this.currentSize] = this.sizes;
    }

    sizeChange(size: number) {
        this.currentSize = size;
        this.sizeChanged.emit(size);
    }
}
