import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Album } from 'src/app/models/Album.model';

@Component({
  selector: 'app-product-create-form-page',
  templateUrl: './product-create-form-page.component.html',
  styleUrls: ['./product-create-form-page.component.scss']
})
export class ProductCreateFormPageComponent implements OnInit {
    @Input() formData!: Album;
    @Output() submitAlbum = new EventEmitter<Album>();
    form!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit():void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.formBuilder.group({
            name: [this.formData.name, Validators.required],
            artist: [this.formData.artist, Validators.required],
            releaseDate: [this.formData.releaseDate, Validators.required]
        })
    }

    onSubmit(formDirective: FormGroupDirective):void {
        if(this.form.valid) {
            const request: Album = {
                name: this.form.controls['name'].value,
                artist: this.form.controls['artist'].value,
                releaseDate: this.form.controls['releaseDate'].value,
            };

            this.submitAlbum.emit(request);

            setTimeout(() => {
                formDirective.resetForm();
                this.form.reset();
            }, 100);
        }
    }
}
