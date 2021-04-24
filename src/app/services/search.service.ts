import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_KEY = 'AIzaSyCXsHh1qROl_kioKf-IusbaC_IVFdpzBu0';

  constructor(
    private http: HttpClient
  ) { }

  getVideos(query: string): Observable<any> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=10`;
    return this.http.get<any>(url)
      .pipe(
        map(response => response.items)
      //  we just want the items, not the entire response so we use map to return the items as an observable
      );
  }
}
