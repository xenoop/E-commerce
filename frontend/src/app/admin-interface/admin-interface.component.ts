import {Component, OnInit} from '@angular/core';
import serviceProduit from "../services/serviceProduit";
import Produit from "../model/produit";
import produit from "../model/produit";

interface interfaceProduit {
}

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent implements OnInit {
  listProducts: Array<Produit> = [];

  constructor(private productservice: serviceProduit) {
  }

  ngOnInit() {
    this.listProducts = this.productservice.getAll()
  }

  onSubmit(product: interfaceProduit) {
    this.productservice.addnewProduct(product)

  }

  deleteProduct(id: string) {
    this.productservice.deleteProduct(id);
  }

  addQuantiteProduct(p: produit) {
    this.productservice.addQuantite(p);

  }

  reduceQuantiteProduct(p: produit) {
    this.productservice.reduceQuantite(p);
  }
}
