import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService{
  public showToast: boolean = false;
  public message: string = "";

  constructor() { }

}
