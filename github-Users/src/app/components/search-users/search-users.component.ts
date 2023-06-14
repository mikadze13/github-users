import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  userArray!: any
  inputValue!: string;
  constructor(private user: UserService) { }


  ngOnInit(): void {

  }

  // submit form
  submitForm() {
    this.user.processInputValue(this.inputValue);
    // get user followers
    this.user.getUser().subscribe((response) => {
      this.userArray = []
      response.map((follower: any) => {

        this.userArray.push(follower)
      })
      console.log(this.userArray)
    })
    // get only user
    // this.user.getUser().subscribe((response) => {
    //   this.userArray = []
    //   this.userArray.push(response)
    // })
  }
}
