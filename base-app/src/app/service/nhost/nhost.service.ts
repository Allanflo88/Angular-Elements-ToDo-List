import { Injectable } from '@angular/core';
import { NhostClient } from '@nhost/nhost-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NHostService {
  public readonly _nhostClient = new NhostClient({
    backendUrl: environment.NHOST_BACKEND_URL,
  });

  public authentication() {
    return this._nhostClient.auth;
  }
}
