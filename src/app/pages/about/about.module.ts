import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { WhatGherkinComponent } from './what-gherkin/what-gherkin.component';
import { MakeGherkinComponent } from './make-gherkin/make-gherkin.component';
import { AboutRoutingModule } from './about.routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    WhatGherkinComponent,
    MakeGherkinComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent,
    WhatGherkinComponent,
    MakeGherkinComponent,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
