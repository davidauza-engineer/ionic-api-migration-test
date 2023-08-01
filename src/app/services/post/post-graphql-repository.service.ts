import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { GET_ALL_POSTS_QUERY } from './graphql/get-all-posts.graphql';

@Injectable({
  providedIn: 'root'
})
export class PostGraphqlRepositoryService {
  constructor(private apollo: Apollo) {}
  getAll(): Observable<any> {
    return this.apollo.watchQuery({ query: GET_ALL_POSTS_QUERY }).valueChanges;
  }
}
