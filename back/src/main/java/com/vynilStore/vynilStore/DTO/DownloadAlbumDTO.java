package com.vynilStore.vynilStore.DTO;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DownloadAlbumDTO implements Serializable {
    private String name;
    private String albumCover;
    private String artist;
    private LocalDate releaseDate;
    // private List<String> songs;
}
