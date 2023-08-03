import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { REST_API_BASE_URL } from '../../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class PostRestRepositoryService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get(`${REST_API_BASE_URL}/posts`);
  }
}
