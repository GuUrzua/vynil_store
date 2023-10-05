package com.vynilStore.vynilStore.DTO;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AlbumDTO implements Serializable {
    private String name;
    private MultipartFile albumCover;
    private String artist;
    private LocalDate releaseDate;
    // private List<String> songs;
}
