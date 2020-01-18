import { Component, OnInit } from '@angular/core';
import serviceUser from "../services/serviceUser";

interface InterfaceInscription {
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private serviceuser: serviceUser) {
  }

  ngOnInit() {
  }

  onSubmit(interfaceInscription: InterfaceInscription) {
    this.serviceuser.newUser(interfaceInscription);
  }
}
