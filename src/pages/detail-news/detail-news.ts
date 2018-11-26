//import { Article } from "./../../app/models/model";
import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { NewsServiceService } from "./../../app/service/news-service.service";


@Component({
  selector: "page-detail-news",
  templateUrl: "detail-news.html"
})
export class DetailNewsPage implements OnInit {
  article;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController
  ){}
  ngOnInit() {
    this.article = this.service.currentArticle;
    console.log(this.service.currentArticle);
  }
  /*
  articles: Article[] = [];
  query: string;

  isError = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.query = this.service.currentArticle;
    console.log("query navparam", this.query);

    this.getNewsItemDetail(this.query);
  }

  ngOnInit(): void {}

  getNewsItemDetail(title: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.getNewsByTitle(title,1);
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
  }*/
}
