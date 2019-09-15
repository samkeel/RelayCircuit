import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainComponent } from './pages/main/main.component';
import { SidebarService } from './layout/full/sidebar/sidebar.service';

import { DashboardCardService } from './pages/main/dashboardMain.service';
import { ConduitSizeComponent } from './pages/conduit-size/conduit-size.component';
import { TestListsComponent } from './pages/test-lists/test-lists.component';
import { ConduitCableTypeService } from './pages/Conduit/conduit.service';

@NgModule({
  declarations: [
    MainComponent,
    ConduitSizeComponent,
    TestListsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    SidebarService, 
    DashboardCardService, 
    ConduitCableTypeService
  ]
})
export class DashboardModule { }
