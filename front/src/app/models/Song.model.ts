import { Time } from "@angular/common";

export interface Song {
    songName: string;
    songDuration: Time;
}

export interface SongUpload {
    songName: string;
    songDuration: Time;
    albumName: string;
}
