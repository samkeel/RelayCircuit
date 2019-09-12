import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ConduitSizeComponent } from './pages/conduit-size/conduit-size.component';
import { TestListsComponent } from './pages/test-lists/test-lists.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'conduit-size',
    component: ConduitSizeComponent
  },
  {
    path: 'test-lists',
    component: TestListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
