import {Component, OnInit} from '@angular/core';
import serviceProduit from "../services/serviceProduit";
import produit from "../model/produit";
import serviceUser from "../services/serviceUser";

@Component({
  selector: 'app-list-commands',
  templateUrl: './list-commands.component.html',
  styleUrls: ['./list-commands.component.css']
})
export class ListCommandsComponent implements OnInit {
  currentUser: User;
  userCommandedProducts: Array<commands> = [];

  constructor(private serviceProduct: serviceProduit, private userservice: serviceUser) {
  }

  async ngOnInit() {
    this.currentUser = await this.userservice.getCurrentUser();
    console.log(this.currentUser);
    this.currentUser.commandes.map(async idproduct => {

      this.userCommandedProducts.push({
        product: (await this.serviceProduct.getProduit(idproduct.idProduit)),
        status: idproduct.status
      });
      console.log(idproduct);
    });
    console.log(this.userCommandedProducts)
  }
}

class commands {
  product: produit;
  status: string;
}
