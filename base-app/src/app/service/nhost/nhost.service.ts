import { Injectable } from '@angular/core';
import { NhostClient } from '@nhost/nhost-js';
import { GraphqlRequestResponse } from '@nhost/nhost-js/dist/esm/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NHostService {
  private readonly _nhostClient = new NhostClient({
    backendUrl: environment.NHOST_BACKEND_URL,
  });

  public graphQlQuery(
    collection: string,
    fields: Array<string>
  ): Promise<GraphqlRequestResponse> {
    // return this._nhostClient.graphql.request(
    //   this.buildQueryRequest(collection, fields)
    // );

    return this._nhostClient.graphql.request(`
    query {
      todos {
        id
        created_at
        name
        is_completed
      }
    }
  `)
  }

  private buildQueryRequest(collection: string, fields: Array<string>): string {
    return `
            query {
              ${collection} {
                ${this.formatFieldsArray(fields)}
              }
            }
          `;
  }

  private formatFieldsArray(fields: Array<string>): string {
    return fields.toString().replace(/,/, ' ');
  }
}
