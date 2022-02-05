import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly _authenticationService: AuthenticationService) { }

  public signInGitHub() {
    this._authenticationService.signIn({
      provider: 'github',
    })
  }

}
