import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../models/video.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() videos: Video[] = [];
  @Input() searchText: string;

  constructor() { }


  ngOnInit(): void {
  }

}
