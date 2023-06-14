import { Component, OnInit } from '@angular/core';
import { UserService } from './core/service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github-Users';
  userArray!: any
  inputValue!: string;
  constructor(private user: UserService) { }

  ngOnInit(): void {

  }
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
