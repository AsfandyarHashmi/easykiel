import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleguideComponent } from './pages/exampleguide/exampleguide.component';
import { HomeComponent } from './pages/home/home.component';
import { UserHomeComponent } from './dashboard/user-home/user-home.component';
import { GuideMakerComponent } from './guide-maker/guide-maker.component';
import { RegisterComponent } from './forms/register/register.component';


const routes: Routes = [
  { path: 'guide/example', component: ExampleguideComponent },
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: UserHomeComponent },
  { path: 'guide/maker', component: GuideMakerComponent },
  { path: 'signup', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
