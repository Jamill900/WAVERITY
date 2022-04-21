import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';
import { NgwWowService } from 'ngx-wow'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: News[] = [];
  title: any;
  p: number = 1;

  loading = false;
  ;

  constructor(private newsService: NewsService,
    private wowService: NgwWowService) {
     }

  ngOnInit() :void {
    this.getNews();
    this.wowService.init();
    
  }
  getNews(){
    this.loading = true;
    this.newsService.getNews().subscribe( news => {
        this.news = news;
      })
  }

  scrollToElement(element: any): void{
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
