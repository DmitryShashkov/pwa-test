import { Position } from '../../classes/position';
import { RainConfig } from '../rain-config';

export interface CreateDropDto {
    readonly initialPosition: Position;
    readonly creationTime: number;
    readonly rainConfig: RainConfig;
}
