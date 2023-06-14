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
  userArray: any[] = []
  inputValue!: string;
  private subscription!: Subscription;
  constructor(private user: UserService) { }

  ngOnInit(): void {

  }
  submitForm() {
    this.user.processInputValue(this.inputValue);
    // this.subscription = this.user.getUser().subscribe((response) => {
    //   response.map((follower: any) => {
    //     this.userArray.push(follower)
    //   })
    //   console.log(this.userArray)
    // })
    this.subscription  = this.user.getUser().subscribe((response)=>{
      this.userArray.push(response)
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
