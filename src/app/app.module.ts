import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RainConfigService } from './services/rain-config.service';
import { RainComponent } from './components/features/rain/rain.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        RainComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
    ],
    providers: [
        RainConfigService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
