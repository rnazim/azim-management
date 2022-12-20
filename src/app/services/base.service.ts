import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseURL: string = "https://dummyjson.com";

  constructor(private http: HttpClient) { }
}
