import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RainConfig } from '../../../interfaces/rain-config';
import { Rectangle } from '../../../classes/rectangle';

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
        const cloud: Rectangle = new Rectangle(
            this.config.cloudCoordinates.topLeft,
            this.config.cloudCoordinates.bottomRight,
        );

        console.log(cloud.randomFromInside);
    }
}
