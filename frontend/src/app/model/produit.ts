export default class Produit {
  // _id: mongoose.Schema.Types.ObjectId,
  // code: Number,
  // name: String,
  // marque: String,
  // categorie: {
  //   type: String,
  //   enum: ['2 in 1 laptops ', 'traditional laptop', 'gaming laptop'],
  //   default: "traditional laptop"
  // },
  // prix: Number,
  // description: String,
  // urlImage: String,
  // quantite: Number
  _id: string;
  code: string;
  name: string;
  marque: string;
  categorie: string;
  prix: number;
  description: string;
  urlImage: string;
  quantite: number;


  constructor(id: string, code: string, name: string, marque: string, categorie: string, prix: number, description: string, urlImage: string, quantite: number) {
    this._id = id;
    this.code = code;
    this.name = name;
    this.marque = marque;
    this.categorie = categorie;
    this.prix = prix;
    this.description = description;
    this.urlImage = urlImage;
    this.quantite = quantite;
  }
}
