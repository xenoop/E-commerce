import {Component, OnInit} from '@angular/core';
import serviceProduit from "../services/serviceProduit";
import Produit from "../model/produit";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-by-categorie',
  templateUrl: './products-by-categorie.component.html',
  styleUrls: ['./products-by-categorie.component.css']
})
export class ProductsByCategorieComponent implements OnInit {
  listProduit: Array<Produit> = [];

  constructor(private productService: serviceProduit, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    const categoriee: string = this.route.snapshot.params['categorie'];
    this.listProduit = await this.productService.getByCategorie(categoriee);
    console.log(this.listProduit)
  }

}
