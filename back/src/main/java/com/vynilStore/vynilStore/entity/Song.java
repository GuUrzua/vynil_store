package com.vynilStore.vynilStore.entity;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "TB_SONGS")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Song {

    @Column(name = "ID_SONG")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "SONG_TITLE")
    private String title;

    @Column(name = "SONG_DURATION")
    private LocalTime songDuration;

    @JoinColumn(name = "ID_ALBUM")
    @ManyToOne(fetch = FetchType.LAZY)
    private Album album;

}
