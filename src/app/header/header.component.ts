import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {RouteInfo} from "../shared/interfaces/app-interfaces";
import {MENU_ROUTES} from "../shared/configs/menu-routes.config";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menuRoutes: RouteInfo[] = MENU_ROUTES;
}
