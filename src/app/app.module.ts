import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material';
import { InfoPanelComponent } from './components/info-panel.component';
import { DoughnutDiagramComponent } from './components/doughnut-diagram.component';
import { TooltipComponent } from './shared/components/tooltip.component';
import { SlideNavButtonsComponent } from './components/slide-nav-buttons.component';
import { BrakePointObserverComponent } from './shared/components/brake-point-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPanelComponent,
    DoughnutDiagramComponent,
    TooltipComponent,
    SlideNavButtonsComponent,
    BrakePointObserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
