import { Song } from "./Song.model";

export interface Album {
    albumCover: File;
    name: string;
    artist: string;
    releaseDate: Date
    songs: Array<Song>
}

export interface AlbumResponse {
    albumCover: string;
    name: string;
    artist: string;
    releaseDate: Date;
}
