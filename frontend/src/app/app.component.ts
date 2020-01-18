import {Component} from '@angular/core';
import AuthService from "./services/authService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private authservice: AuthService) {

  }


}
