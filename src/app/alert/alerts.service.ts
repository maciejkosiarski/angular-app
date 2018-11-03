import {Alert, AlertType} from './alert.model';

export class AlertsService {
    public alerts: Alert[] = [];

    constructor() {}

    getAlerts() {
        return this.alerts.slice();
    }

    addAlert(type: AlertType, message: string) {
        this.alerts.push(new Alert(type, message));
    }

    clear() {
        this.alerts = [];
    }
}
