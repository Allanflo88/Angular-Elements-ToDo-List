import { Injectable } from '@angular/core';
import { NhostClient } from '@nhost/nhost-js';
import { GraphqlRequestResponse } from '@nhost/nhost-js/dist/esm/types';
import { NHostService } from '../nhost/nhost.service';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  private _nhostClient: NhostClient;

  constructor(_nhostService: NHostService) {
    this._nhostClient = _nhostService._nhostClient
  }

  public mutation(mutation: string, data: Object, returnFormat: Array<string> = ['id']): Promise<GraphqlRequestResponse> {
    return this._nhostClient.graphql.request(this.buildMutationRequest(mutation, data, returnFormat))
  }

  private buildMutationRequest(mutation: string, data: Object, returnFormat: Array<string>): string {
    return `
        ${mutation}(objects: [${data.toString().replace(/,/, ' ')}]) {
          returning {
            ${this.formatFieldsArray(returnFormat)}
          }
        }
      }
    `
  }

  public query(
    collection: string,
    fields: Array<string>
  ): Promise<GraphqlRequestResponse> {
    return this._nhostClient.graphql.request(
      this.buildQueryRequest(collection, fields)
    );
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
