import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    imports: [ MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatGridListModule, MatTabsModule, MatStepperModule ],
    exports: [ MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatGridListModule, MatTabsModule, MatStepperModule ],
})
export class MaterialModule { }