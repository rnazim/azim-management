import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { IUser, IUserWrapper } from '../interfaces/i-user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  endpoint: string = "/users";

  constructor(private baseService: BaseService,
    private httpClient: HttpClient) { }

  all(): Observable<IUserWrapper> {
    return this.httpClient.get<IUserWrapper>(
      `${this.baseService.baseURL}${this.endpoint}`
    )
    // .pipe(
    //   filter((val: any) => {
    //     console.log(val.users);
        
    //     for (let i in val.users) {
          
    //       console.log(formatDate(val.users[i].birthDate, "dd/MM/YYYY", 'en-US'));
    //       // val.users[i].birthDate = formatDate(val.users[i].birthDate, "YYY", 'en-US');
    //     }

    //     return val;
    //   }

    //   )
    // )
  }

  create(user: IUser): Observable<IUser>{
    const headers = {
      'Content-Type' : 'application/json'
    };
    
    const body = JSON.stringify(user);

    return this.httpClient.post<IUser>(
      `${this.baseService.baseURL}${this.endpoint}/add`,
      body,
      {headers}
    );
  }

  update(user: IUser):Observable<IUser> {
    const headers = {
      'Content-Type' : 'application/json'
    };
    
    const {id, ...productClean} = user;
    const body = JSON.stringify(productClean);

    return this.httpClient.put<IUser>(
      `${this.baseService.baseURL}${this.endpoint}/${id}`,
      body,
      {headers}
    );
  }

  delete(user: IUser):Observable<IUser> {
    const headers = {
      'Content-Type' : 'application/json'
    };
    
    const {id, ...productClean} = user;
    const body = JSON.stringify(productClean);

    return this.httpClient.delete<IUser>(
      `${this.baseService.baseURL}${this.endpoint}/${id}`
    );
  }
}
