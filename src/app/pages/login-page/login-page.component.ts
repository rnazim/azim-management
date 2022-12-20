import { Component, OnInit } from '@angular/core';
import { ILogin, ILoginToken } from 'src/app/interfaces/i-login';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  user: ILogin = {
    username: "",
    password: ""
  }

  constructor(private loginService: LoginService, private storageService: StorageService) { }

  ngOnInit(): void {
      
  }

  onLogin(){
    this.loginService.login(this.user)
    .subscribe(
      (response: ILoginToken) => {
        console.log(response);
        this.storageService.save("TOKEN", response.token);
        this.storageService.save("USERNAME", response.username);
        this.storageService.save("PHOTO_PROFILE", response.image);
      }
    )
  }
}
