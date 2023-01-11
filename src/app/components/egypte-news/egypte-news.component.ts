import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';

@Component({
  selector: 'app-egypte-news',
  templateUrl: './egypte-news.component.html',
  styleUrls: ['./egypte-news.component.css']
})
export class EgypteNewsComponent implements OnInit {
  egypteNews:any = []

  constructor(
    private newsService: NewsServiceService
  ) { }

  ngOnInit(): void {
    this.newsService.getegyptenews().subscribe(data => {
      console.log('checking the list books in ngonInit',data.articles)
      this.egypteNews = data.articles;
    });
  }

}

