import { NavController, NavParams, LoadingController,ModalController } from "ionic-angular";
import { Component, OnInit } from "@angular/core";
import { SearchNewsPage } from "./../search-modal-news/search-modal-news";
import { NewsServiceService } from "../../app/service/news-service.service";
import { Article } from "../../app/models/model";
import { DetailNewsPage } from "./../detail-news/detail-news";
import { InAppBrowser } from '@ionic-native/in-app-browser';

//declare var $: any;
@Component({
  selector: "page-home",
  templateUrl: "home.html",
  entryComponents:[ DetailNewsPage ]
})
export class HomePage implements OnInit {
  articles: Article[] = [];
  countryName: string;
  data:any;
  url:string;

  constructor(
    private inappbrowser: InAppBrowser,
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    

  ) {
    console.log(navParams.get("country"));
    this.countryName = "Indonesia";

    this.getNewsByCountry("id");

  }

  ngOnInit() {
    /*this.service.getData()
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });*/
  }
  openWebPage(url: string){
    
    const browser = this.inappbrowser.create(url,'_blank',{location:'no', zoom:'no'}); 
   browser.show();
  }
  openModal() {
    let modal = this.modalCtrl.create(SearchNewsPage);
    modal.present();
  }

  itemNews(article) {
    this.service.currentArticle = article;

    this.navCtrl.push(DetailNewsPage);
    console.log(this.service.currentArticle);
  }
  getNewsByCountry(countryCode: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.get20TrendingNewsByCountry(countryCode);
    x.subscribe(
      data => {
        this.articles = [];
        this.articles = data["articles"];
        this.data = data["articles"];
        //this.service.currentArticle = this.articles;
        console.log(this.articles);
      },
      error => {
        this.service.errorFunction();
      }
    );

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
  }

  getNewsByCategory(category: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.getNewsByCatCountCode(
      category,
      this.navParams.get("country")["code"],
      1
    );
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
