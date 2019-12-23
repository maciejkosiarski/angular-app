import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    @Input() protected filters: object;
    @Output() filtered = new EventEmitter<object>();

    constructor() {
    }

    ngOnInit() {
    }

    filter($event) {
        console.log(this.filters);
        $event.preventDefault();
        // this.filtered.emit($event);
    }

    OnInput($event: any) {
        this.filters[$event.target.name] = $event.target.value;
        console.log(this.filters);
    }
}
