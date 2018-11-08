import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RainConfig } from '../interfaces/rain-config';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Position } from '../classes/position';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RainConfigService implements Resolve<RainConfig> {
    public resolve (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<RainConfig> {
        const config: RainConfig = {
            canvasWidth: 800,
            canvasHeight: 600,
            cloudCoordinates: {
                topLeft: new Position(-800, 2400),
                bottomRight: new Position(1600, 1800),
            },
        };

        return of(config);
    }
}
