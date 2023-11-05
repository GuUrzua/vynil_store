package com.vynilStore.vynilStore.DTO;

import java.time.LocalTime;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
public class SongData {
    private String songName;
    private LocalTime songDuration;
    private String albumName;
}
