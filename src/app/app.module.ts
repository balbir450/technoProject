import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';





@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    FormsModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
