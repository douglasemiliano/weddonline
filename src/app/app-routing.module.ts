import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { WeddingFormComponent } from './components/wedding/wedding-form/wedding-form.component';
import { WeddingComponent } from './components/wedding/wedding.component';

const routes: Routes = [
  { path: "certificate", component: WeddingComponent},
  { path: "wedding", component: WeddingFormComponent},
  { path: "home", component: HomeComponent},
  { path: "", redirectTo: "home", pathMatch: "full" }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
