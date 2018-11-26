import { CountryPage } from "./../pages/countries/countries";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { Keyboard } from "@ionic-native/keyboard";
import { MyApp } from "./app.component";

import { NewsServiceService } from "./service/news-service.service";

import { AboutPage } from "../pages/about/about";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { CatNewsPage } from "../pages/category-news-page/cat-news-page";
import { CategoriesPage } from "./../pages/categories/categories";
import { CountryNewsPage } from "./../pages/country-news/country-news";
import { SearchNewsPage } from "./../pages/search-modal-news/search-modal-news";
import { DetailNewsPage } from "./../pages/detail-news/detail-news";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CatNewsPage,
    CategoriesPage,
    SearchNewsPage,
    CountryPage,
    CountryNewsPage,
    DetailNewsPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CatNewsPage,
    CategoriesPage,
    SearchNewsPage,
    CountryPage,
    CountryNewsPage,
    DetailNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    NewsServiceService,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    
  ]
})
export class AppModule {}
