import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { Song } from '../models/Song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  public postSongs(songs: Array<Song>)  {
    const songList = {
        songs: songs
    }
    return this.http.post(`${environment.apiUrl}/songs/create`, songList);
  }
}
