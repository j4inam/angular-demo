import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2ChildComponent } from './page2-child/page2-child.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component,
  },
  {
    path: 'page2',
    component: Page2Component,
    children: [
      {
        path: 'child1',
        component: Page2ChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
