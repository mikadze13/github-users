import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl:string = environment.apiUrl
  constructor(private http:HttpClient) { }


  getUser():Observable<any>{
    return this.http.get(this.apiUrl).pipe(map((response:any)=>{
      return response
    }))
  }



}
