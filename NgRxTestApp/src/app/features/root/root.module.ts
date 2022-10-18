import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule
  ]
})
export class RootModule { }
