import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RainConfig } from '../../../interfaces/rain-config';
import { Rectangle } from '../../../classes/rectangle';
import {Drop} from "../../../classes/drop";
import {Position} from "../../../classes/position";

@Component({
    selector: 'rain',
    templateUrl: './rain.component.html',
    styleUrls: ['./rain.component.css'],
})
export class RainComponent implements OnInit, AfterViewInit {
    @ViewChild('canvas')
    private canvasRef: ElementRef;

    private config: RainConfig;

    constructor (
        private readonly route: ActivatedRoute,
    ) { }

    public ngOnInit () : void {
        this.config = this.route.snapshot.data.config;
    }

    public ngAfterViewInit () : void {
        // debugger;
        const canvasElement: HTMLCanvasElement = this.canvasRef.nativeElement;
        const context: CanvasRenderingContext2D = canvasElement.getContext('2d');

        const cloud: Rectangle = new Rectangle(
            this.config.cloudCoordinates.topLeft,
            this.config.cloudCoordinates.bottomRight,
        );

        const drops: Drop[] = [];

        // this.tick(cloud, drops, context);
    }

    private tick (
        cloud: Rectangle,
        drops: Drop[],
        context: CanvasRenderingContext2D,
    ) {
        if (drops.length < 1000) {
            drops.push(new Drop({
                rainConfig: this.config,
                initialPosition: cloud.randomFromInside,
                creationTime: 1,
            }));
        }

        context.fillStyle = '#fff';
        context.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        context.fillStyle = '#000';

        for (const drop of drops) {
            drop.updatePosition({
                forceOfWind: 1,
                currentTime: 1,
            });

            drop.render(context);
        }

        // console.log(drops);
        requestAnimationFrame(() => {
            this.tick(cloud, drops, context);
        });
    }
}
