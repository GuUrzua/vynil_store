package com.vynilStore.vynilStore.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "TB_ALBUM")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "NAME")
    private String name;

    @Lob
    @Column(name = "ALBUM_COVER")
    private byte[] albumCover;

    @Column(name = "ARTIST")
    private String artist;

    // @Column(name = "SONGS")
    // private List<String> songs;

    @Column(name = "RELEASE_DATE")
    private LocalDate releaseDate;
}
