import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {CvComponent} from './about/cv/cv.component';
import {DiyComponent} from './diy/diy.component';
import {TravelComponent} from './travel/travel.component';
import {Hibiny2018Component} from './travel/hibiny2018/hibiny2018.component';
import {OtherComponent} from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CvComponent,
    DiyComponent,
    TravelComponent,
    Hibiny2018Component,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
