import {RowInterface} from '../table/row.interface';

export class DefaultRowModel implements RowInterface {
    public id: number;
    public type: string;
    public description: string;
    public active: boolean;
    public createdAt: number;

    constructor(
        id: number,
        type: string,
        description: string,
        active: boolean,
        createdAt: number,
    ) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.active = active;
        this.createdAt = createdAt;
    }

    getHeaders() {
        return Object.getOwnPropertyNames(this);
    }
}
