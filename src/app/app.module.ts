import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MaterialModule ],
  declarations: [ AppComponent, HelloComponent, OrganizationsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
