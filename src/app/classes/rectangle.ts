import { Position } from './position';
import { Range } from './range';

export class Rectangle {
    constructor (
        public topLeft: Position,
        public bottomRight: Position,
    ) { }

    public get randomFromInside () : Position {
        const xRange: Range = new Range(this.topLeft.X, this.bottomRight.X);
        const yRange: Range = new Range(this.topLeft.Y, this.bottomRight.Y);

        return new Position(xRange.randomPoint, yRange.randomPoint);
    }
}
