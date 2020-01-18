import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ListProduitComponent} from './list-produit/list-produit.component';
import {ProduitDetailsComponent} from './produit-details/produit-details.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {InscriptionComponent} from './inscription/inscription.component';
import serviceProduit from "./services/serviceProduit";
import serviceUser from "./services/serviceUser";
import {MainpageComponent} from './mainpage/mainpage.component';
import authService from "./services/authService";
import {AuthGuard} from "./guards/auth.guard";
import {CarouselComponent} from './carousel/carousel.component';
import {ListCommandsComponent} from './list-commands/list-commands.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SearchComponent} from './search/search.component';
import {AdminInterfaceComponent} from './admin-interface/admin-interface.component';
import {ProductsByCategorieComponent} from './products-by-categorie/products-by-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ListProduitComponent,
    ProduitDetailsComponent,
    LoginComponent,
    InscriptionComponent,
    MainpageComponent,
    CarouselComponent,
    ListCommandsComponent,
    AccountSettingsComponent,
    NotFoundComponent,
    SearchComponent,
    AdminInterfaceComponent,
    ProductsByCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [serviceProduit, serviceUser, authService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
