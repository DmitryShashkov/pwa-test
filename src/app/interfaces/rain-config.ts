import { Position } from '../classes/position';

export interface RainConfig {
    readonly canvasWidth: number;
    readonly canvasHeight: number;

    readonly cloudCoordinates: {
        topLeft: Position;
        bottomRight: Position;
    };
}
