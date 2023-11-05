package com.vynilStore.vynilStore.DTO;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UploadAlbumDTO implements Serializable {
    private String name;
    private MultipartFile albumCover;
    private String artist;
    private LocalDate releaseDate;
}
