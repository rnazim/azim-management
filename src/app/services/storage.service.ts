import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, value: string):void {
    localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  check(key: string): boolean{
    if(localStorage.getItem(key)){
      return true;
    }
    return false;
  }

  clear(key: string) {
    localStorage.setItem(key, "");
  }
}
