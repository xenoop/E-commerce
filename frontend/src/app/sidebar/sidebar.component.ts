import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserInterface} from "../login/login.component";
import serviceProduit from "../services/serviceProduit";

interface searchInterface {
  search: string;

}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private serviceProduit: serviceProduit) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  setTimeOut() {
    setTimeout(() => window.location.reload(), 0.01);

  }
}
