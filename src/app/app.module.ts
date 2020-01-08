import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleguideComponent } from './pages/exampleguide/exampleguide.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginModalComponent } from './forms/login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleguideComponent,
    HomeComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
