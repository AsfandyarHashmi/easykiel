import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleguideComponent } from './pages/exampleguide/exampleguide.component';
import { HomeComponent } from './pages/home/home.component';
import { UserHomeComponent } from './dashboard/user-home/user-home.component';
import { GuideMakerComponent } from './guide-maker/guide-maker.component';


const routes: Routes = [
  { path: 'guide/example', component: ExampleguideComponent },
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: UserHomeComponent },
  { path: 'guide/maker', component: GuideMakerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
