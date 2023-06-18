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
  constructor(private http: HttpClient) { }

  processInputValue(input: string) { 
    this.apiUrl = `https://api.github.com/users/${input}`
  }

  getUser(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.accessToken}`,
      'Accept': 'application/vnd.github.v3+json'
    })
    return this.http.get(this.apiUrl, { headers }).pipe(map((response: any) => {
      return response
    }))
  }



}
