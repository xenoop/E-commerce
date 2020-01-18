import {Component, OnInit} from '@angular/core';
import serviceUser from "../services/serviceUser";
import {Router} from "@angular/router";
import authService from "../services/authService";
import {timeout} from "rxjs/operators";

export interface UserInterface {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private serviceuser: serviceUser, private serviceAuth: authService, private router: Router) {
  }

  ngOnInit() {
  }

  async onSubmit(userInterface: UserInterface) {

    let test = await this.serviceuser.login(userInterface);

    console.log(test);
    // if (test == "wrong credentials") {
    //   alert('username or password are false !');
    // }
  }
}
