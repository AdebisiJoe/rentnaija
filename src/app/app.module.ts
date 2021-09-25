import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";


import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { TicketsPage } from '../pages/tickets/tickets';
import { OpenTicketsPage } from '../pages/open-tickets/open-tickets';
import { MapsearchPage } from '../pages/mapsearch/mapsearch';
import { FavouritesPage } from '../pages/favourites/favourites';
import { ProfilePage } from '../pages/profile/profile';
import { TicketDetailPage } from '../pages/ticket-detail/ticket-detail';
import { EditLoginDetailPage } from '../pages/edit-login-detail/edit-login-detail';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { HouseSearchResultPage } from '../pages/house-search-result/house-search-result';
import { HotelSearchResultPage } from '../pages/hotel-search-result/hotel-search-result';
import { SubPropertyDetailPage } from '../pages/sub-property-detail/sub-property-detail';
import { LogoutPage } from '../pages/logout/logout';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationProvider } from '../providers/authentication/authentication';

import { HomePageModule } from '../pages/home/home.module';  
import { IonicStorageModule } from '@ionic/storage';
import { PropertyProvider } from '../providers/property/property';
import { TicketProvider } from '../providers/ticket/ticket';

import { IonicSelectableModule } from 'ionic-selectable';

import { Schools } from '../providers/models/schools';
import { FavouriteProvider } from '../providers/favourite/favourite';


@NgModule({
  declarations: [
    MyApp,
    ListPage,
    WelcomePage,
    TicketsPage,
    OpenTicketsPage,
    MapsearchPage,
    FavouritesPage,
    ProfilePage,
    TicketDetailPage,
    EditLoginDetailPage,
    EditprofilePage,
    LogoutPage,
    HouseSearchResultPage,
    HotelSearchResultPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HomePageModule,
    IonicSelectableModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    TicketsPage,
    OpenTicketsPage,
    MapsearchPage,
    FavouritesPage,
    ProfilePage,
    TicketDetailPage,
    EditLoginDetailPage,
    EditprofilePage,
    HouseSearchResultPage,
    HotelSearchResultPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    PropertyProvider,
    TicketProvider,
    Schools,
    FavouriteProvider
  ]
})
export class AppModule {}
