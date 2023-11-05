package com.vynilStore.vynilStore.DTO;

import java.time.LocalTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SongDownloadDTO {
    private String title;
    private LocalTime songDuration;
}
