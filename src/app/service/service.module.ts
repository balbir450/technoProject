import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import {SalepurchaseComponent} from './salepurchase/salepurchase.component';
import { OtherserviceComponent } from './otherservice/otherservice.component';
import { GuidelinesComponent} from './guidelines/guidelines.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
 
 declarations:[ManufacturingComponent,SalepurchaseComponent,OtherserviceComponent,GuidelinesComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports :[ManufacturingComponent,SalepurchaseComponent,OtherserviceComponent,GuidelinesComponent]

})

export class ServiceModule { }
