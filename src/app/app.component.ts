import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {FeaturesComponent} from "./features/features.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HomeComponent, ContactComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
