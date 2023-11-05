package com.vynilStore.vynilStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vynilStore.vynilStore.entity.Album;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Integer> {

    Album findByName(String albumName);
}
