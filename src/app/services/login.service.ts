import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginToken } from '../interfaces/i-login';
import { BaseService } from './base.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint: string = "/auth/login"
  constructor(private baseService: BaseService,
    private httpClient: HttpClient,
    private storageService: StorageService) { }

    login(loginUser: ILogin): Observable<ILoginToken> {
      let body = JSON.stringify(loginUser);
      const headers = {
        'Content-Type': 'application/json'
      }
      return this.httpClient.post<ILoginToken>(
        `${this.baseService.baseURL}${this.endpoint}`,
        body,
        {headers}
      )
    }

    isUserLoggedIn(): boolean {
      if(this.storageService.check('TOKEN')){
        return true;
      }
      return false;
    }

    logout(): void {
      this.storageService.clear("TOKEN");
      this.storageService.clear("USERNAME");
    }
}
