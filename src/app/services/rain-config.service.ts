import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RainConfig } from '../interfaces/rain-config';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Position } from '../classes/position';

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
