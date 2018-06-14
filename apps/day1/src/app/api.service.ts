import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

const API_KEY = '&key=AIzaSyBVYdPmnO8X3tMwiOyRohi3_1VCls2BkXw';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  playlist(id) {
    return this.http
      .get(
        `${BASE_URL}?part=snippet&maxResults=15&playlistId=${id}&fields=items(snippet(playlistId%2CresourceId%2FvideoId%2Cthumbnails%2Fhigh%2Furl%2Ctitle))%2CnextPageToken%2CprevPageToken${API_KEY}`
      )
      .pipe(map(res => res.json()));
  }

  pagination(id, token) {
    return this.http
      .get(
        `${BASE_URL}?part=snippet&maxResults=15&pageToken=${token}&playlistId=${id}&fields=items(snippet(playlistId%2CresourceId%2FvideoId%2Cthumbnails%2Fhigh%2Furl%2Ctitle))%2CnextPageToken%2CprevPageToken${API_KEY}`
      )
      .pipe(map(res => res.json()));
  }
}
