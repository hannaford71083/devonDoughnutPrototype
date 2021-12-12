import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { InfoPanelComponent } from './info-panel.component';
import { DoughnutDiagramComponent } from './doughnut-diagram.component';
import { TooltipComponent } from './tooltip.component';
import { SlideNavButtonsComponent } from './slide-nav-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPanelComponent,
    DoughnutDiagramComponent,
    TooltipComponent,
    SlideNavButtonsComponent
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
