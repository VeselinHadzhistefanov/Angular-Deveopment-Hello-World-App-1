import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    EmployeeListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
