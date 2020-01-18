import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {ProduitDetailsComponent} from "./produit-details/produit-details.component";
import {ListCommandsComponent} from "./list-commands/list-commands.component";
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {SearchComponent} from './search/search.component';
import {AdminInterfaceComponent} from "./admin-interface/admin-interface.component";
import {ProductsByCategorieComponent} from "./products-by-categorie/products-by-categorie.component";
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [
  {path: "", component: MainpageComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "productDetails/:id", component: ProduitDetailsComponent, canActivate: [AuthGuard]},
  {path: "commands", component: ListCommandsComponent, canActivate: [AuthGuard]},
  {path: "search/:by", component: SearchComponent, canActivate: [AuthGuard]},
  {path: "accountsettings", component: AccountSettingsComponent, canActivate: [AuthGuard]},
  {path: "listProductsbyCat/:categorie", component: ProductsByCategorieComponent, canActivate: [AuthGuard]},
  {path: "adminInterface", component: AdminInterfaceComponent, canActivate: [AdminGuard]},
  {path: "**", component: NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
