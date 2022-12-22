import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/i-user';
import { ToasterService } from 'src/app/services/toaster.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  showMore: boolean = false;
  showToast: boolean = false;
  isConfirmDelete: boolean = false;

  @Input() user: IUser = {} as IUser;

  constructor(private userService: UserService, private toastService: ToasterService){

  }

  ngOnInit(): void {
      
  }

  showToggle(): void{
    this.showMore = !this.showMore;
  }

  setUser(user: IUser){
    this.user = JSON.parse(JSON.stringify(user));
  }
  
  cancel(){
    this.user = {}as IUser;
    this.showMore=false;
  }

  onCreate(){
    this.userService.create(this.user)
      .subscribe(
        (response: IUser) => {
          this.showMore = false;
          this.user = {} as IUser;
          this.toastService.showToast = true;
          this.toastService.message = `Berhasil menyimpan data ${response.firstName}`;
        }
      )
  }

  onUpdate(){
    this.userService.update(this.user)
    .subscribe(
      (response: IUser) => {
        this.showMore = false;
        this.user = {} as IUser;
        this.toastService.showToast = true;
        this.toastService.message = `Berhasil mengupdate data ${response.firstName}`;
      }
    )
  }

  onDelete(){
    this.userService.delete(this.user)
      .subscribe(
        (response: IUser) => {
          this.showMore = false;
          this.user = {} as IUser;
          this.toastService.showToast = true;
          this.isConfirmDelete = false;
          this.toastService.message = `Berhasil delete data ${response.firstName}`;
        }
      )
  }
}
