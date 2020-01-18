import {Component, OnInit} from '@angular/core';
import Produit from "../model/produit";
import {ActivatedRoute} from "@angular/router";
import serviceProduit from "../services/serviceProduit";
import {Observable} from "rxjs";
import serviceUser from "../services/serviceUser";

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  theDesignatedProduct: Produit;

  constructor(private route: ActivatedRoute, private serviceProduit: serviceProduit, private serviceUser: serviceUser) {
  }

  async ngOnInit() {
    const idProoduit: string = this.route.snapshot.params['id'];
    this.theDesignatedProduct = await this.serviceProduit.getProduit(idProoduit);
  }

  addProduit(theDesignatedProduct: Produit) {
    if (confirm("are you sure you want to add this Product to your cart ? ")) {
      this.serviceUser.addToPanier(theDesignatedProduct);
    }
  }
}
