import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      defaultSize: 'lg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
