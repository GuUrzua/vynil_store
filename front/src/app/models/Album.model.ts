export interface Album {
    albumCover: File;
    name: string;
    artist: string;
    releaseDate: Date
}

export interface AlbumResponse {
    albumCover: string;
    name: string;
    artist: string;
    releaseDate: Date;
}
