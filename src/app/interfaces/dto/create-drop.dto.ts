import {Position} from "../position";

export interface CreateDropDto {
    readonly initialPosition: Position;
    readonly creationTime: number;
}
