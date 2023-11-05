import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Album } from 'src/app/models/Album.model';
import { Song } from 'src/app/models/Song.model';

@Component({
  selector: 'app-product-create-form-page',
  templateUrl: './product-create-form-page.component.html',
  styleUrls: ['./product-create-form-page.component.scss'],
})
export class ProductCreateFormPageComponent implements OnInit {
    @Input() formData!: Album;
    @Output() submitAlbum = new EventEmitter<Album>();
    form!: FormGroup;
    displayFileName: string | undefined;
    fileStore!: FileList | null;
    songList!: Array<Song>;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit():void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.formBuilder.group({
            albumCover: new FormControl(""),
            name: [this.formData.name, Validators.required],
            artist: [this.formData.artist, Validators.required],
            releaseDate: [this.formData.releaseDate, Validators.required],
        })
    }

    handleFileInput(files: FileList | null) {
        this.fileStore = files;
        if(this.fileStore?.length) {
            this.displayFileName = this.fileStore.item(0)?.name;
        }
    }

    onSubmit(formDirective: FormGroupDirective):void {
        const file: any = this.fileStore?.item(0);
        if(this.form.valid) {
            const request: Album = {
                albumCover: file,
                name: this.form.controls['name'].value,
                artist: this.form.controls['artist'].value,
                releaseDate: this.form.controls['releaseDate'].value,
                songs: this.songList
            };

            this.submitAlbum.emit(request);

            setTimeout(() => {
                formDirective.resetForm();
                this.form.reset();
            }, 100);
        }
    }

    setSongList(songList: Array<Song>) {
        this.songList = songList
    }
}
