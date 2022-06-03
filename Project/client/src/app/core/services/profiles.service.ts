import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Profile } from '../models';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  // constructor (
  //   private apiService: ApiService
  // ) {}
  constructor(
    private http: HttpClient
  ) {}

  // get(username: string): Observable<Profile> {
  //   return this.apiService.get('/profiles/' + username)
  //     .pipe(map((data: {profile: Profile}) => data.profile));
  // }
  get(username: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${'/profiles/' + username}`, { params })
      .pipe(map((data: {profile: Profile}) => data.profile));
  }
}
