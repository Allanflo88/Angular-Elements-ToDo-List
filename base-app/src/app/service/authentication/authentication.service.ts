import { Injectable } from '@angular/core';
import { NhostClient } from '@nhost/nhost-js';
import { NHostService } from '../nhost/nhost.service';
import { SignInParams } from '@nhost/hasura-auth-js/dist/esm/utils/types';
import { SignUpEmailPasswordParams } from '@nhost/hasura-auth-js/dist/esm/utils/types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _nhostClient: NhostClient;

  constructor(_nhostService: NHostService) {
    this._nhostClient = _nhostService._nhostClient
  }

  public signIn(params: SignInParams) {
    return this._nhostClient.auth.signIn(params);
  }

  public signUp(params: SignUpEmailPasswordParams) {
    return this._nhostClient.auth.signUp(params)
  }
}
