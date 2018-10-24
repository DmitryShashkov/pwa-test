import { Routes } from '@angular/router';
import { RainComponent } from './components/features/rain/rain.component';
import { RainConfigService } from './services/rain-config.service';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: RainComponent,
        resolve: {
            config: RainConfigService,
        },
    },
];
