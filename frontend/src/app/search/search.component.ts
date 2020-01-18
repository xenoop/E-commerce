import {Component, OnInit} from '@angular/core';
import produit from "../model/produit";
import serviceProduit from "../services/serviceProduit";
import {ActivatedRoute} from "@angular/router";
import Produit from "../model/produit";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listSearch: { name: Array<Produit>; desc: Array<Produit> } = {
    name: [],
    desc: []
  };

  constructor(private serviceProduct: serviceProduit, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    const code: string = this.route.snapshot.params['by'];
    console.log(code);
    this.listSearch = await this.serviceProduct.searchProduct(code);
  }
}
