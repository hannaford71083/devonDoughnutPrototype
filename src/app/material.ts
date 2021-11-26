import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [ MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatGridListModule ],
    exports: [ MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatGridListModule ],
})
export class MaterialModule { }