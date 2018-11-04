import {Row} from './row.model';

export class RowsService {
    private rows: Row[] = [
        new Row(
            'Email',
            'Fake email message',
            false,
            true,
            1541174129,
            1,
            ),
        new Row(
            'Sms',
            'Fake sms message',
            true,
            false,
            1541174129,
            2,
        ),
        new Row(
            'Skype',
            'Fake skype message',
            true,
            true,
            1541174129,
            3,
        ),
        new Row(
            'Sms',
            'Fake sms message',
            true,
            false,
            1541174129,
            4,
        ),
        new Row(
            'Skype',
            'Fake skype message',
            true,
            true,
            1541174129,
            5,
        ),
        new Row(
            'Email',
            'Fake email message',
            false,
            true,
            1541174129,
            6,
        ),
        new Row(
            'Sms',
            'Fake sms message',
            true,
            false,
            1541174129,
            7,
        ),
        new Row(
            'Skype',
            'Fake skype message',
            true,
            true,
            1541174129,
            8,
        ),
        new Row(
            'Email',
            'Fake email message',
            false,
            true,
            1541174129,
            9,
        ),
        new Row(
            'Sms',
            'Fake sms message',
            true,
            false,
            1541174129,
            10,
        ),
        new Row(
            'Skype',
            'Fake skype message',
            true,
            true,
            1541174129,
            11,
        ),
        new Row(
            'Email',
            'Fake email message',
            false,
            true,
            1541174129,
            12,
        ),
    ];

    constructor() {}

    getRows(limit: number, start = 0) {
        return this.rows.slice(start, (start + limit));
    }

    countRows() {
        return this.rows.length;
    }

    getRow(id: number) {
        return this.rows[id];
    }
}
