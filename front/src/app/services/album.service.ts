import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { Album, AlbumResponse } from '../models/Album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  public createAlbum(album: Album) {
    const releaseDate = album.releaseDate.toString();
    const formData = new FormData();
    formData.append('artist', album.artist);
    formData.append('name', album.name);
    formData.append('releaseDate', releaseDate);
    formData.append('albumCover', album.albumCover);
    return this.http.post<Album>(`${environment.apiUrl}/album/create`, formData);
  }

  public getAlbum() {
    return this.http.get<Array<AlbumResponse>>(`${environment.apiUrl}/album`);
  }
}
