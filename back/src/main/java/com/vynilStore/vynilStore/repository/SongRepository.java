package com.vynilStore.vynilStore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vynilStore.vynilStore.entity.Song;

@Repository
public interface SongRepository extends JpaRepository<Song, Integer> {

    public List<Song> findAllByAlbumId(Integer albumId);
}
