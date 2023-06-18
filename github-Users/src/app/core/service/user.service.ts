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
