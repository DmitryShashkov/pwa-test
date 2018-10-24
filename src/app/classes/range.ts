export class Range {
    constructor (
        public start: number,
        public end: number,
    ) { }

    public get randomPoint () : number {
        const min: number = Math.min(this.start, this.end);
        const max: number = Math.max(this.start, this.end);

        const delta: number = max - min;

        return Math.round(min + delta * Math.random());
    }
}
