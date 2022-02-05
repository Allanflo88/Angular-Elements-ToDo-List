import { Injectable } from '@angular/core';
import { GraphqlRequestResponse } from '@nhost/nhost-js/dist/esm/types';
import { NHostService } from '../nhost/nhost.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private readonly _nhostService: NHostService) { }

  public getAllTodos(): Promise<GraphqlRequestResponse>{
    return this._nhostService.graphQlQuery('todos', ['id', 'created_at', 'name', 'is_completed'])
  }
}
