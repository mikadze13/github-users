import { Component, OnInit } from '@angular/core';
import { UserService } from './core/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github-Users';
  userArray:any[]=[]


  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.getUser().subscribe((response)=>{
      this.userArray = response
      console.log(this.userArray)
    })
  }

}
