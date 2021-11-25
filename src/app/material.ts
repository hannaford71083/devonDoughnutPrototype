import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule ],
    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule ],
})
export class MaterialModule { }