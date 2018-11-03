import {Row} from './row.model';

export class RowsService {
    private rows: Row[] = [
        new Row(
            'Email',
            'Fake email message',
            false,
            true,
            1541174129,
            1541170000,
            ),
        new Row(
            'Sms',
            'Fake sms message',
            true,
            false,
            1541174129,
            1541170000,
        ),
        new Row(
            'Skype',
            'Fake skype message',
            true,
            true,
            1541174129,
            1541170000,
        ),
    ];

    constructor() {}

    getRows() {
        return this.rows.slice();
    }

    getRow(id: number) {
        return this.rows[id];
    }
}
