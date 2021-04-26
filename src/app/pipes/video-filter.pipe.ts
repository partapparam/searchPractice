import { Pipe, PipeTransform } from '@angular/core';
import {Video} from '../models/video.interface';

@Pipe({
  name: 'videoFilter'
})
export class VideoFilterPipe implements PipeTransform {

  transform(videos: Video[], searchString: string): any {
    if (!videos) {
      return [];
    }
    if (!searchString) {
      return videos;
    }

    searchString = searchString.toLocaleLowerCase();
    return videos.filter(video => {
      return video.title.toLocaleLowerCase().includes(searchString);
    });
  }

}
