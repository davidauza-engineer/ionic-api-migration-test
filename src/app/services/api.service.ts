import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { REST_API_BASE_URL, GRAPHQL_API_BASE_URL } from '../constants/api.constants';
import { PostRestRepositoryService } from './post/post-rest-repository.service';
import { PostGraphqlRepositoryService } from './post/post-graphql-repository.service';
import { IUser } from '../models/user.model';
import { Entity } from '../models/entity.model';
import { ApiAction } from '../models/api-action.model';
import { IApiOptions } from '../models/api-option.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private service: PostRestRepositoryService, private service2: PostGraphqlRepositoryService) {}
  call(user: IUser, entity: Entity, action: ApiAction, options: IApiOptions = {}): Observable<any> {
    if (user.new_api) {
      return this.service2.getAll();
    } else {
      return this.service.getAll();
    }
  }
}
