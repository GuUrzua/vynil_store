import { TypeofExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Album, AlbumResponse } from 'src/app/models/Album.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
    albums!: Array<AlbumResponse>;

    constructor(private albumService: AlbumService) {}

    ngOnInit(): void {
        this.getAlbums();
    }

    public getAlbums() {
        this.albumService.getAlbum().subscribe(response => {
            this.albums = response
        });
    }

    public getImage(albumBase64: string) {
        return 'data:image/*;base64,' + albumBase64;
    }
}
