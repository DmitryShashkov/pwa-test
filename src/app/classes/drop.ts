import {FORCE_OF_GRAVITY, G} from "../app.constants";
import {Position} from "../interfaces/position";
import {CreateDropDto} from "../interfaces/dto/create-drop.dto";
import {UpdateDropPositionDto} from "../interfaces/dto/update-drop-position.dto";

export class Drop {
    private readonly initialPosition: Position;
    private readonly creationTime: number;

    private currentPosition: Position;

    constructor (dto: CreateDropDto) {
        this.initialPosition = dto.initialPosition;
        this.currentPosition = this.initialPosition;

        this.creationTime = dto.creationTime;
    }

    public updatePosition (dto: UpdateDropPositionDto) : void {
        const timeDelta: number = dto.currentTime - this.creationTime;

        const X: number = this.initialPosition.X + (dto.forceOfWind * timeDelta);
        const Y: number = this.initialPosition.Y - (FORCE_OF_GRAVITY * (timeDelta ** 2) / 2);

        this.currentPosition = { X, Y };
    }

    public render (context: CanvasRenderingContext2D) : void {
        // context.fillRect(this.currentL - 5, 600 - this.currentH - 5, 10, 10);
    }
}
