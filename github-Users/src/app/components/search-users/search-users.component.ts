import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  userArray: any = [
    {
      avatar_url:"https://avatars.githubusercontent.com/u/583231?v=4",
      name:"The Octocat",
      created_at:"2011-01-25T18:44:36Z",
      bio:null,
      public_repos:8,
      followers:9515,
      following:9,
      location:"San Francisco",
      twitter_username:"Not available",
      blog:"https://github.blog",
      company:"@github",
      login: "octocat"
    }
  ]
  mode:boolean = true
  inputValue!: string;
  light:boolean = false;
  dark:boolean = true;
  styleExp!:string
  styleExpCont!:string
  styleExpText!:string
  applyPlaceholderColor:boolean = false
  constructor(private user: UserService) { }


  ngOnInit(): void {

  }

  // submit form
  submitForm() {
    this.user.processInputValue(this.inputValue);
    // get user followers
    // this.user.getUser().subscribe((response) => {
    //   this.userArray = []
    //   response.map((follower: any) => {

    //     this.userArray.push(follower)
    //   })
    //   console.log(this.userArray)
    // })
    // get only user
    this.user.getUser().subscribe((response) => {
      this.userArray = []
      this.userArray.push(response)
      console.log(this.userArray)
    })
  }

  // dark and light mode 
  lightMode(){
    this.dark = true;
    this.light = false;
    document.body.style.background = 'white'
    this.styleExp = "white"
    this.styleExpCont = "white"
    this.styleExpText = "#4b6a9b"
  }

  darkMode(){
    this.dark = false;
    this.light = true;
    document.body.style.background = '#141d2f'
    this.styleExp = "#1e2a47" 
    this.styleExpCont = "#141d2f"
    this.applyPlaceholderColor = true
    this.styleExpText = "white"
  }

}
