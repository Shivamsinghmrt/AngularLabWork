import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MObile } from "src/app/file1/Mobile";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MObile
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
