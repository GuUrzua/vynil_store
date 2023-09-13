import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Album } from 'src/app/models/Album.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.scss']
})
export class CreateProductPageComponent{
    formData = {} as Album;

    constructor(
        private albumService: AlbumService,
        private snackBar: MatSnackBar,
    ) {}

    onSubmit(event: Album) {
        this.postAlbum(event);
    }

    postAlbum(album: Album) {
        this.albumService.createAlbum(album).subscribe(() => {
            this.openSnackBar("Album Criado com sucesso!");
        })
    }

    openSnackBar(message: string): void {
        this.snackBar.open(message, 'Fechar', {
            duration: 5000,
        })
    }
}
