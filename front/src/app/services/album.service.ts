import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { Album } from '../models/Album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  public createAlbum(album: Album) {
    return this.http.post<Album>(`${environment.apiUrl}/album/create`, album);
  }
}
