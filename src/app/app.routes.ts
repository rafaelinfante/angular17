import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FeaturesComponent} from "./features/features.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"features", component: FeaturesComponent},
  {path:"contact", component: ContactComponent},
  {path:"**", redirectTo: ""}
];
