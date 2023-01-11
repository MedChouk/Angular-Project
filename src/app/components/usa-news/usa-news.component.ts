import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';

@Component({
  selector: 'app-usa-news',
  templateUrl: './usa-news.component.html',
  styleUrls: ['./usa-news.component.css']
})
export class UsaNewsComponent implements OnInit {
  
  usaNews:any = []

  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.newsService.getegyptenews().subscribe(data => {
      console.log('checking the list books in ngonInit',data.articles)
      this.usaNews = data.articles;
    });
  }

}
