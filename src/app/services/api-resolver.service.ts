import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Entity } from '../models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class ApiResolverService {
  call(user: IUser, apiResponse: any, graphQLEndpoint: string) {
    if (user.new_api) {
      return apiResponse.data[graphQLEndpoint];
    } else {
      return apiResponse;
    }
  }
}
