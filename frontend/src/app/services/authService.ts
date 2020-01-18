import {HttpClient , HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export default class AuthService {
  constructor(private http: HttpClient , private router : Router){
  }
  isLoggedIn() {
    return localStorage.getItem('token');
  }
}
