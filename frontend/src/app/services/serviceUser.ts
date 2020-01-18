import {Injectable} from "@angular/core";
import {UserInterface} from "../login/login.component";
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from "@angular/common/http";

import {log} from 'util';
import {Router} from "@angular/router";
import authService from "./authService";
import produit from "../model/produit";
import serviceProduit from "./serviceProduit";
import Produit from "../model/produit";


interface InterfaceInscription {
}

@Injectable()
export default class ServiceUser {
  logginedUser: User;
  panier: produit[] = [];


  constructor(private http: HttpClient, private router: Router, private serviceProduct: serviceProduit) {
  }

  returnTotal() {
    let S = 0;
    this.panier.map(p => S = S + p.prix);
    return S;
  }

  addToPanier(product: produit) {
    this.panier.push(product);
  }

  getPanier(): produit[] {
    return this.panier;
  }

  deleteFromPanier(product: produit) {
    this.panier = this.panier.filter(p => {
      return p._id != product._id;
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login'])
  }

  login(user: UserInterface) {
    localStorage.setItem("username", user.username);
    this.http.post('http://localhost:5000/api/user/login', user, {responseType: 'text'}).subscribe(result => {
        if (result) {
          localStorage.setItem('token', result);
          this.router.navigate(['/']);
          setTimeout(() => window.location.reload(), 0.01);

        } else {
          return "wrong credentials";
        }
      }
    )
  }

  resetPanier() {
    this.panier = [];
  }

  async addCommand(productsInPanier: Produit[]) {
    let user = await this.getCurrentUser();
    let listProducts = {
      commandes: user.commandes
    };
    productsInPanier.map(p => {
      // @ts-ignore
      listProducts.commandes.push({idProduit: p._id})
    });
    console.log(listProducts);
    this.http.put(`http://localhost:5000/api/user/addCommand/${user.username}`, listProducts, {headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))})
      .subscribe((results: any[]) => {
        console.log(results)
      });
    productsInPanier.map(p => {
      this.http.put(`http://localhost:5000/produits/${p._id}`, {quantite: p.quantite - 1}, {headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))})
        .subscribe((results: any[]) => {
          console.log(results)
        });
    });
    await this.resetPanier();
  }

  async getCurrentUser(): Promise<User> {
    const user = this.http.get(`http://localhost:5000/api/user/userinfo/${localStorage.getItem("username").toString()}`, {
      headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))
    });
    return await new Promise<User>((resolve, reject) => {
      user.subscribe(resolve as any, reject as any);
    });
  }

  newUser(formvalues: InterfaceInscription) {
    this.http.post('http://localhost:5000/api/user/register', formvalues).subscribe(result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
