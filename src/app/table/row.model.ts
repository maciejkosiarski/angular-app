export class Row {
    public type: string;
    public message: string;
    public active: boolean;
    public recurrent: boolean;
    public nextRun: number;
    public createdAt: number;

    constructor(
        type: string,
        message: string,
        active: boolean,
        recurrent: boolean,
        nextRun: number,
        createdAt: number
    ) {
        this.type = type;
        this.message = message;
        this.active = active;
        this.recurrent = recurrent;
        this.nextRun = nextRun;
        this.createdAt = createdAt;
    }
}