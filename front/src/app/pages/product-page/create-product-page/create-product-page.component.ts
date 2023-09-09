import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/models/Album.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.scss']
})
export class CreateProductPageComponent implements OnInit{
    @Input() formData!: Album;
    @Output() submitAlbum = new EventEmitter<Album>();
    form!: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.formBuilder.group({
            name: [this.formData.name, Validators.required],
            artist: [this.formData.artist, Validators.required],
            releaseDate: [this.formData.releaseDate, Validators.required]
        })
    }

    onSubmit(formDirective: any): void {
        if(this.form.valid) {
            const request: Album = {
                name: this.form.controls['name'].value,
                artist: this.form.controls['name'].value,
                releaseDate: this.form.controls['name'].value
            }
        }

        this.
    }
}
