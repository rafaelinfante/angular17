import { Component } from '@angular/core';
import { SignInProviders } from '../../_shared/interfaces/auth-interfaces';
import { SIGNIN_PROVIDERS } from '../../_shared/configs/signin-buttons.config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public signInProviders: SignInProviders[] = SIGNIN_PROVIDERS;
}
