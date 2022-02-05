import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  public loginError?: string;

  constructor(private readonly _authenticationService: AuthenticationService, private readonly _router: Router) { }

  public signInGitHub(): void {
    this._authenticationService.signIn({
      provider: 'github',
    })
  }

  public signInEmailPassword(): void {
    this._authenticationService.signIn({
      email: this.loginFormGroup.controls['email'].value,
      password: this.loginFormGroup.controls['password'].value,
    }).then((signInResponse) => {
      if (signInResponse.error) {
        this.showError(signInResponse.error.message);
        return;
      }
      this._router.navigateByUrl('list');
    }).catch(() => {
      this.showError("Erro ao realizar login")
    })
  }

  private showError(error: string): void {
    this.loginError = error;
  }

}
