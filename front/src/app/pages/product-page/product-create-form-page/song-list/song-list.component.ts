import { Time } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Song } from 'src/app/models/Song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
    @Input() formData!: Song;
    form!: FormGroup;
    songs: {songName: string, songDuration: Time}[] = [];
    @Output() songList = new EventEmitter<Array<Song>>();
    timeValue = "00:00";

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.formBuilder.group({
            name: new FormControl(),
            duration: new FormControl()
        })
    }

    addSong() {
        this.songs.push(
            {
                songName: this.form.controls["name"].value,
                songDuration: this.form.controls["duration"].value
            });
        this.songList.emit(this.songs);
        this.form.reset();
    }

    formatTime() {
        const regex = /^([0-5][0-9]):([0-5][0-9])$/;
        if (!regex.test(this.timeValue)) {
          this.timeValue = "00:00";
        }
      }
}
