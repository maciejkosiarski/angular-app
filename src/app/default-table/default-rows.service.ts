import {DefaultRowModel} from './default-row.model';

export class DefaultRowsService {
    private rows = [
        new DefaultRowModel(
            1,
            'Email',
            'Fake email description',
            false,
            1541174129,
            ),
        new DefaultRowModel(
            2,
            'Sms',
            'Fake sms description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            3,
            'Skype',
            'Fake skype description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            4,
            'Sms',
            'Fake sms description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            5,
            'Skype',
            'Fake skype description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            6,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            7,
            'Sms',
            'Fake sms description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            8,
            'Skype',
            'Fake skype description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            9,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            10,
            'Sms',
            'Fake sms description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            11,
            'Skype',
            'Fake skype description',
            true,
            1541174129,
        ),
        new DefaultRowModel(
            12,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            13,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            14,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            15,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            16,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            17,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            18,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            19,
            'Email',
            'Fake email description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            20,
            'Email',
            'Fake description',
            false,
            1541174129,
        ),
        new DefaultRowModel(
            21,
            'Email',
            'Fake description',
            false,
            1541174129,
        ),
    ];

    constructor() {}

    getRows(limit: number, start = 0): DefaultRowModel[] {
        return this.rows.slice(start, (start + limit));
    }

    countRows(): number {
        return this.rows.length;
    }

    getRow(id: number): DefaultRowModel {
        return this.rows[id];
    }
}
