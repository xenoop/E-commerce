import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import serviceUser from "../services/serviceUser";
import authService from "../services/authService";
import Produit from "../model/produit";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productsInPanier: Produit[] = [];
  S: number;
  user: User;

  constructor(private userservice: serviceUser, private authservice: authService, private router: Router) {
  }

  logoutConfirm() {
    if (confirm("are you sure you want to log out ?")) {
      this.userservice.logout();
      this.userservice.resetPanier();
    }
  }

  deleteProductFromPanier(p: Produit) {
    this.userservice.deleteFromPanier(p);
    this.S = this.S - p.prix;
    this.productsInPanier = this.productsInPanier.filter((pr) => {
      return pr._id != p._id
    });
  }

  async ngOnInit(): Promise<void> {
    this.productsInPanier = this.userservice.getPanier();
    this.S = this.userservice.returnTotal();
    this.user = await this.userservice.getCurrentUser();
  }

  addToCommands() {
    this.userservice.addCommand(this.productsInPanier);
    this.productsInPanier = [];
  }
}
