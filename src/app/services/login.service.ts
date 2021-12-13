import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(reqBody: any) {
    this.http.post('login_api', reqBody).subscribe(function (response) {
      console.log(response);
    });
  }

}
