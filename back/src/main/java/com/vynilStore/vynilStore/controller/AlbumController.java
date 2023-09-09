package com.vynilStore.vynilStore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vynilStore.vynilStore.entity.Album;
import com.vynilStore.vynilStore.services.AlbumService;

@RestController
public class AlbumController {

  @Autowired
  private AlbumService albumService;

  @PostMapping(value = "/album/create")
  public ResponseEntity<Album> createAlbum(@RequestBody Album album) {
    Album response = albumService.createAlbum(album);
    return ResponseEntity.ok(response);
  }
}