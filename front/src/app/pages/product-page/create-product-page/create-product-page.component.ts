import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Album } from 'src/app/models/Album.model';
import { SongUpload } from 'src/app/models/Song.model';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.scss']
})
export class CreateProductPageComponent{
    formData = {} as Album;

    constructor(
        private albumService: AlbumService,
        private snackBar: MatSnackBar,
        private songService: SongService,
    ) {}

    onSubmit(event: Album) {
        this.postAlbum(event);
    }

    postAlbum(album: Album) {
        const songUploadList: SongUpload[] = [];
        album.songs.forEach(song => {
            const songUpload: SongUpload = {
                songName: song.songName,
                songDuration: song.songDuration,
                albumName: album.name

            }
            songUploadList.push(songUpload);
        })
        this.albumService.createAlbum(album).subscribe(() => {
            this.songService.postSongs(songUploadList).subscribe(() => {
                this.openSnackBar("Album Criado com sucesso!");
            })
        })
    }

    openSnackBar(message: string): void {
        this.snackBar.open(message, 'Fechar', {
            duration: 5000,
        })
    }
}
