import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  defaultPlaylist = 'PL04uCq-W4tiJI1qHNIxEFQSGCnRzDD3Gv';
  currentPlaylist = null;
  selectedVideo = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getPlaylist(this.defaultPlaylist);
  }

  getPlaylist(id) {
    this.api.playlist(id).subscribe(res => {
      (this.currentPlaylist = res), console.log(`THIS IS THE RESPONSE: ${res}`);
    });
  }

  getPlaylistPagination(object) {
    this.api
      .pagination(object.id, object.token)
      .subscribe(res => (this.currentPlaylist = res));
  }

  selectVideo(video) {
    let theVideo = {
      snippet: {
        ...video.snippet,
        resourceId: {
          videoId: video.snippet.resourceId.videoId
        }
      }
    };
    theVideo.snippet.resourceId.videoId = `https://www.youtube.com/embed/${
      theVideo.snippet.resourceId.videoId
    }`;
    this.selectedVideo = theVideo;
  }
}
