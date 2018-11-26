import { Article } from "./../../app/models/model";
import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { NewsServiceService } from "./../../app/service/news-service.service";
import { DetailNewsPage } from "./../detail-news/detail-news";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: "page-cat-news",
  templateUrl: "cat-news-page.html",
  entryComponents:[ DetailNewsPage ]
})
export class CatNewsPage implements OnInit {
  articles: Article[] = [];
  query: string;

  isError = false;

  constructor(
   private inappbrowser: InAppBrowser,
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.query = navParams.get("query");
    console.log("query navparam", this.query);

    this.getNewsBasedOnQuery(this.query);
  }

  ngOnInit(): void {}

  itemNews(article) {
    this.service.currentArticle = article;

    this.navCtrl.push(DetailNewsPage);
    console.log(this.service.currentArticle);
  }
   openWebPage(url: string){
    
    const browser = this.inappbrowser.create(url,'_blank',{location:'no', zoom:'no'}); 
   browser.show();
  }
  getNewsBasedOnQuery(category: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.getNewsByCategory(category, 1);
    x.subscribe(
      data => {
        this.articles = [];
        this.articles = data["articles"];
      },
      error => {
        this.service.errorFunction();
      }
    );

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
  }
}
