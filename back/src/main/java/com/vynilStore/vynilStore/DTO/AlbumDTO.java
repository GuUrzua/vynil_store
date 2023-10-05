package com.vynilStore.vynilStore.DTO;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AlbumDTO {
    private String name;
    private String artist;
    private LocalDate releaseDate;
}
