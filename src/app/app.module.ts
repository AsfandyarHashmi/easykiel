import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleguideComponent } from './pages/exampleguide/exampleguide.component';
import { HomeComponent } from './pages/home/home.component';
import { UserHomeComponent } from './dashboard/user-home/user-home.component';
import { GuideMakerComponent } from './guide-maker/guide-maker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './forms/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleguideComponent,
    HomeComponent,
    UserHomeComponent,
    GuideMakerComponent,
    NavbarComponent,
    RegisterComponent,
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
