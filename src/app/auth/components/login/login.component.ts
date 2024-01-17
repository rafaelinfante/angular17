import { Component } from '@angular/core';
import { SignInProviders } from '../../_shared/interfaces/auth-interfaces';
import { SIGNIN_PROVIDERS } from '../../_shared/configs/signin-buttons.config';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public signInProviders: SignInProviders[] = SIGNIN_PROVIDERS;

  constructor(private translate: TranslateService) {
    this.translate.use('pt');
  }
}
