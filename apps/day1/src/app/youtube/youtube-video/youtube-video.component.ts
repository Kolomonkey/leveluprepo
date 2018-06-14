import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafePipe } from '@levelup/safe.pipe';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent {
  @Input() video;
}
