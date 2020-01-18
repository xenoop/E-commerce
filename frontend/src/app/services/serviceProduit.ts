import {Injectable} from "@angular/core";
import Produit from "../model/produit";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {async} from "@angular/core/testing";
import produit from "../model/produit";

interface produitInterface {

}

interface searchInterface {
  search: string;
}

interface interfaceProduit {
}

@Injectable()
export default class ServiceProduit {

  listProduits: Array<Produit> = new Array<Produit>();
  listProduitsbydesc: Array<Produit>;
  listProduitsbyname: Array<Produit>;

  constructor(private http: HttpClient, private router: Router) {
  }

  getAll(): Array<Produit> {
    let headers = new Headers();
    headers.append('auth-token', localStorage.getItem('token'));
    this.listProduits = [];
    this.http.get('http://localhost:5000/produits', {
      headers: new HttpHeaders().set('auth-token', localStorage.getItem('token')),
    }).subscribe((results: any[]) => {
      results.map(produit => {
        this.listProduits.push(produit);
      })
    });
    console.log(this.listProduits);
    return this.listProduits;
  }

  async getProduit(id: string): Promise<Produit> {
    let params = new HttpParams();
    params.set("id", String(id));
    const result = this.http.get<Produit>(`http://localhost:5000/produits/${id}`, {
      headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))
    });
    return await new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  async searchProduct(searchInterface: string) {
    let params = new HttpParams();

    params.append("search", searchInterface);
    this.listProduitsbydesc = [];
    this.listProduitsbyname = [];

    await this.http.get<Array<Produit>>(`http://localhost:5000/produitsbydesc/${searchInterface}`, {
      headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))
    }).subscribe((results: any[]) => {
      results.map(produit => {
        this.listProduitsbydesc.push(produit);
      });
    });
    await this.http.get<Array<Produit>>(`http://localhost:5000/produitsbyname/${searchInterface}`, {
      headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))
    }).subscribe((results: any[]) => {
      results.map(produit => {
        this.listProduitsbyname.push(produit);
      });
      console.log(results)
    });
    console.log(this.listProduitsbyname);
    console.log(this.listProduitsbydesc);
    return await {"name": this.listProduitsbyname, "desc": this.listProduitsbydesc};
  }

  getByCategorie(categorie: string) {
    return this.getAll().filter((p) => {
      return p.categorie === 'traditional laptop'
    });
  }

  addnewProduct(product: interfaceProduit) {
    this.http.post('http://localhost:5000/produits', product, {
      headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))
    }).subscribe(p => console.log(JSON.stringify(p)));
    window.location.reload()
  }

  deleteProduct(id: string) {
    this.http.delete(`http://localhost:5000/produits/${id}`, {
      headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))
    }).subscribe(p => console.log(JSON.stringify(p)));
    window.location.reload()
  }

  addQuantite(p: produit) {
    this.http.put(`http://localhost:5000/produits/${p._id}`, {quantite: p.quantite + 1}, {headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))})
      .subscribe((results: any[]) => {
        console.log(results)
      });
    window.location.reload()
  }

  reduceQuantite(p: produit) {
    this.http.put(`http://localhost:5000/produits/${p._id}`, {quantite: p.quantite - 1}, {headers: new HttpHeaders().set('auth-token', localStorage.getItem('token'))})
      .subscribe((results: any[]) => {
        console.log(results)
      });
    window.location.reload()
  }
}
