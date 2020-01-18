class User {

  constructor(prenom: string, nom: string, username: string, password: string, commandes: Array<string>) {
    this.prenom = prenom;
    this.nom = nom;
    this.username = username;
    this.password = password;
    this.commandes = commandes;
  }

  prenom: string;
  nom: string;
  username: string;
  password: string;
  commandes: Array<string> = [];
  role: string = "normal";
}
