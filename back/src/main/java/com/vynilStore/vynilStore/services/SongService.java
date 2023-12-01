package com.vynilStore.vynilStore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vynilStore.vynilStore.DTO.SongDownloadDTO;
import com.vynilStore.vynilStore.DTO.SongUploadDTO;
import com.vynilStore.vynilStore.entity.Album;
import com.vynilStore.vynilStore.entity.Song;
import com.vynilStore.vynilStore.repository.SongRepository;

@Service
public class SongService {

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private AlbumService albumService;

    public List<Song> postSongs(SongUploadDTO songs) {
        Album album = albumService.getAlbumByName(songs.getSongs().get(0).getAlbumName());
        List<Song> songsToSave = new ArrayList<>();
        songs.getSongs().forEach(song -> {
            songsToSave.add(Song.builder()
                    .album(album)
                    .title(song.getSongName())
                    .songDuration(song.getSongDuration())
                    .build());
        });

        return this.songRepository.saveAll(songsToSave);
    }

    public List<SongDownloadDTO> getSongs(Integer albumId) {
        List<Song> songs = this.songRepository.findAllByAlbumId(albumId);
        return songs.stream().map(song -> {
            return SongDownloadDTO.builder()
                    .title(song.getTitle())
                    .songDuration(song.getSongDuration())
                    .build();
        }).collect(Collectors.toList());
    }
}
