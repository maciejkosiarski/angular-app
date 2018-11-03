import {Component, OnInit} from '@angular/core';
import {Alert} from './alert.model';
import {AlertsService} from './alerts.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alerts.component.html',
    styleUrls: []
})
export class AlertsComponent implements OnInit {
    public alerts: Alert[] = [];

    constructor(private service: AlertsService) {
    }

    ngOnInit() {
        this.alerts = this.service.getAlerts();
        this.service.clearAlerts();
    }

}
