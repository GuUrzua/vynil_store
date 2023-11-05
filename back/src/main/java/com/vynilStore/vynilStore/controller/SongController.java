package com.vynilStore.vynilStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vynilStore.vynilStore.DTO.SongDownloadDTO;
import com.vynilStore.vynilStore.DTO.SongUploadDTO;
import com.vynilStore.vynilStore.entity.Song;
import com.vynilStore.vynilStore.services.SongService;

@RestController
public class SongController {

    private SongService songService;

    @Autowired
    private SongController(
            SongService songService) {
        this.songService = songService;
    }

    @PostMapping(value = "songs/create")
    public ResponseEntity<List<Song>> postSongs(@RequestBody SongUploadDTO songs) {
        List<Song> response = this.songService.postSongs(songs);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "songs")
    public ResponseEntity<List<SongDownloadDTO>> getSongsByAlbum(@RequestParam Integer albumId) {
        List<SongDownloadDTO> response = this.songService.getSongs(albumId);
        return ResponseEntity.ok(response);
    }
}
