import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';
export interface NewsHeadlines {

  title: string;

}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  goToNews() {
    this.router.navigate(["patient/news"])
  }


  public allNews: NewsHeadlines[] = []

  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit(): void {

    this.newsService.getNewsHeadlines().subscribe((res) => {
      this.allNews = res;
    })
  }

}
