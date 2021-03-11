import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';

import { ConventionComponent } from './convention/convention.component';

import { SetupComponent } from './convention/setup/setup.component';
import { ListEditComponent } from './inventory/list-edit/list-edit.component';
import { InventoryListService } from './inventory/list-edit/list-edit.service';
import { JwtService } from './jwt.service';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InventoryComponent,
  
    ConventionComponent,
    
    SetupComponent,
    
    ListEditComponent
    
  
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InventoryListService, JwtService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
