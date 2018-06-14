import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.css']
})
export class YoutubeListComponent {
  @Input() playlist;
  @Output() newPlaylist = new EventEmitter();
  @Output() selectedVideo = new EventEmitter();
  @Output() pagination = new EventEmitter();
}
