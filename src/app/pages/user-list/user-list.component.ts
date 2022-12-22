import { Component } from '@angular/core';
import { IUser, IUserWrapper } from 'src/app/interfaces/i-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: Array<any> = [];
  user: IUser = {} as IUser;
  showMore: boolean = false;

  constructor(private userSevice: UserService) { }

  ngOnInit(): void {
      this.onAll();
  }

  onAll(): void{
    this.userSevice.all().subscribe(
      (response: IUserWrapper) => {
        this.users = response.users;
      }
    );
  }

  
  showToggle(): void{
    this.showMore = !this.showMore;
  }

  showDetail(p: IUser): void {
    this.user = p;
  }
}
