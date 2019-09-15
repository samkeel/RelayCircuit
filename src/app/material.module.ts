import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select'; 

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatGridListModule,
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatGridListModule,
        MatSelectModule
    ]
})
export class MaterialModule { }