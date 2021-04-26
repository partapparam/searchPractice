import { Component, OnInit } from '@angular/core';
import {Video} from '../../models/video.interface';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  public videos: Video[] = [];
  loading = false;
  inputTouched = false;
  searchFilter = '';

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  searchVideo(query: string): void {
    this.searchService.getVideos(query)
      .subscribe(items => {
        this.videos = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelTitle: item.snippet.channelTitle,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        this.inputTouched = true;
        this.loading = false;
    });
  }

}
