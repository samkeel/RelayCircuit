import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainComponent } from './pages/main/main.component';
import { SidebarService } from './layout/full/sidebar/sidebar.service';

import { DashboardCardService } from './pages/main/dashboardMain.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [SidebarService, DashboardCardService]
})
export class DashboardModule { }
