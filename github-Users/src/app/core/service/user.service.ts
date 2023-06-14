import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public apiUrl = ``
  private accessToken = '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'
  constructor(private http:HttpClient) { }

  processInputValue(input: string) { 
    console.log(input);
    this.apiUrl = `https://api.github.com/users/${input}/followers`
  }

  getUser():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization':`Token ${this.accessToken}`,
      'Accept':'application/vnd.github.v3+json'
    })
    return this.http.get(this.apiUrl ,{headers}).pipe(map((response:any)=>{
      return response
    }))
  }



}
