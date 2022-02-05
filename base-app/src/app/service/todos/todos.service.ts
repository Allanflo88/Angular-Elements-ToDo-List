import { Injectable } from '@angular/core';
import { GraphqlRequestResponse } from '@nhost/nhost-js/dist/esm/types';
import { GraphqlService } from '../graphql/graphql.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private readonly _graphQlService: GraphqlService) { }

  public getAllTodos(): Promise<GraphqlRequestResponse>{
    return this._graphQlService.query('todos', ['id', 'created_at', 'name', 'is_completed'])
  }

  public insertTodo(text: string): void {
    this._graphQlService.mutation('insert_todos', {name: text});
  }
}
