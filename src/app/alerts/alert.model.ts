export class Alert {
    public type: AlertType;
    public message: string;

    constructor(type: AlertType, message: string) {
        this.type = type;
        this.message = message;
    }
}

export enum AlertType {
    'primary' = 'primary',
    'secondary' = 'secondary',
    'success' = 'success',
    'danger' = 'danger',
    'warning' = 'warning',
    'info' = 'info',
    'light' = 'light',
    'dark' = 'dark',
}
