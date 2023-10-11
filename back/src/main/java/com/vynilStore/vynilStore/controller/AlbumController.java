package com.vynilStore.vynilStore.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vynilStore.vynilStore.DTO.DownloadAlbumDTO;
import com.vynilStore.vynilStore.DTO.UploadAlbumDTO;
import com.vynilStore.vynilStore.entity.Album;
import com.vynilStore.vynilStore.services.AlbumService;

@RestController
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    @PostMapping(value = "/album/create")
    public ResponseEntity<Album> createAlbum(@ModelAttribute UploadAlbumDTO album) throws IOException {
        Album response = albumService.createAlbum(album);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "album")
    public ResponseEntity<List<DownloadAlbumDTO>> getAlbums() {
        List<DownloadAlbumDTO> response = albumService.getAlbums();
        return ResponseEntity.ok(response);
    }

}
