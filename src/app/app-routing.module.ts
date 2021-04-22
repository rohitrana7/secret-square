import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BedroomMenuComponent } from "./bedroom-menu/bedroom-menu.component";
import { DiningMenuComponent } from "./dining-menu/dining-menu.component";
import { HomeComponent } from "./home/home.component";
import { KitchenMenuComponent } from "./kitchen-menu/kitchen-menu.component";
import { LedMenuComponent } from "./led-menu/led-menu.component";
import { OfficeMenuComponent } from "./office-menu/office-menu.component";
import { OtherFurnitureComponent } from "./other-furniture/other-furniture.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo:'/home', pathMatch:'full'}, //default route
  { path: "home", component: HomeComponent },
  { path: "bedroom", component: BedroomMenuComponent },
  { path: "kitchen", component: KitchenMenuComponent },
  { path: "tables", component: DiningMenuComponent },
  { path: "livingRoom", component: LedMenuComponent },
  { path: "offices", component: OfficeMenuComponent },
  { path: "others", component: OtherFurnitureComponent },
  { path: "**", component: PageNotFoundComponent} //wildCardRoute should always be the last route in the configuration
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  BedroomMenuComponent,
  KitchenMenuComponent,
  DiningMenuComponent,
  LedMenuComponent,
  OfficeMenuComponent,
  OtherFurnitureComponent,
  PageNotFoundComponent,
  HomeComponent
];
