import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewPropertiesComponent } from './view-properties/view-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ListPropertyComponent,
    LoginComponent,
    RegisterComponent,
    ViewPropertiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
//{path:'',component:AppComponent},
      {path:'view-properties',component:ViewPropertiesComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
