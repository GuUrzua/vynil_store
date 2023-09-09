package com.vynilStore.vynilStore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vynilStore.vynilStore.entity.Album;
import com.vynilStore.vynilStore.repository.AlbumRepository;

@Service
public class AlbumService {
  
  @Autowired
  private AlbumRepository albumRepository;

  public Album createAlbum(Album album){
    return albumRepository.save(album);
  }
}
