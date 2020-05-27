import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { GuidelinesComponent } from './service/guidelines/guidelines.component';
import { OtherserviceComponent } from './service/otherservice/otherservice.component';
import { SalepurchaseComponent } from './service/salepurchase/salepurchase.component';
import { ManufacturingComponent } from './service/manufacturing/manufacturing.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'service', component:ServiceComponent, children:
  [
    {path:'guidelines', component: GuidelinesComponent},
    {path:'manufacturing', component: ManufacturingComponent},
    {path:'otherservice', component: OtherserviceComponent},
    {path:'sale', component: SalepurchaseComponent}
  ]
  },
  {path:'aboutus', component:AboutusComponent},
 { path:'contact',component:ContactComponent}, 
 { path:'subscribe',component:SubscribeComponent}
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent,ServiceComponent,AboutusComponent,ContactComponent,SubscribeComponent];