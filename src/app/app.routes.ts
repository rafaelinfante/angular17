import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FeaturesComponent} from "./features/features.component";
import {ContactComponent} from "./contact/contact.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "features", component: FeaturesComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", component: NotFoundComponent}
];
