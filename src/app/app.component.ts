import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Drop} from "./classes/drop";



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    // title = 'Progressive Web Cat';
    @ViewChild('canvas')
    private canvasRef: ElementRef;

    // private static produceDrop () : Drop {
    //     return new Drop(Math.random() * 500, 600 - Math.random() * 50);
    // }

    public ngAfterViewInit () : void {
        // const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
        // const context: CanvasRenderingContext2D = canvas.getContext('2d');
        //
        // context.fillStyle = '#0000ff';
        //
        // const drops: Drop[] = [
        //     AppComponent.produceDrop(),
        // ];
        //
        // const v0: number = 7 * 50;
        // const interval: number = 1;
        // let time: number = 0;
        //
        // setInterval(() => {
        //     context.clearRect(0, 0, 800, 600);
        //
        //     for (let drop of drops) {
        //         drop.updatePosition(v0, time / 1000);
        //         drop.render(context);
        //     }
        //
        //     time += interval;
        // }, interval);

    }
}
