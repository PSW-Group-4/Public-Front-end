import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app--news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public newsPubl: News[] = [];

  constructor(private NewsService : NewsService,) { }

  ngOnInit(): void {
    this.NewsService.getNewsPublished().subscribe(res => {
      this.newsPubl = res;
    })
  }
}
