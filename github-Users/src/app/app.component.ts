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
   
  constructor(private user: UserService) { }

  ngOnInit(): void {

  }
  

}
