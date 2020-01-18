import {Component, OnInit} from '@angular/core';
import Produit from "../model/produit";
import ServiceProduit from "../services/serviceProduit";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  listProduit: Array<Produit> = [];

  constructor(private serviceProduit: ServiceProduit) {
  }

  ngOnInit() {
    this.listProduit = this.serviceProduit.getAll();
  }

}
