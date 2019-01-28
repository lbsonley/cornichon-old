import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '@app/pages/about/about.component';
import { WhatGherkinComponent } from '@app/pages/about/what-gherkin/what-gherkin.component';
import { MakeGherkinComponent } from '@app/pages/about/make-gherkin/make-gherkin.component';

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: '',
        component: WhatGherkinComponent
      },
      {
        path: 'make-gherkin',
        component: MakeGherkinComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
