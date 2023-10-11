import { Component, Input } from '@angular/core';
import { AlbumResponse } from 'src/app/models/Album.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

    @Input() album!: AlbumResponse;

    get image() {
        return 'data:image/*;base64,' + this.album.albumCover;
    }
}
