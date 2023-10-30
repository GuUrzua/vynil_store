package com.vynilStore.vynilStore.services;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vynilStore.vynilStore.DTO.DownloadAlbumDTO;
import com.vynilStore.vynilStore.DTO.UploadAlbumDTO;
import com.vynilStore.vynilStore.entity.Album;
import com.vynilStore.vynilStore.repository.AlbumRepository;

import lombok.val;

@Service
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    public Album createAlbum(UploadAlbumDTO albumDTO) throws IOException {
        val imageData = compressImage(albumDTO.getAlbumCover().getBytes());
        Album album = Album.builder()
                .artist(albumDTO.getArtist())
                .albumCover(imageData)
                .name(albumDTO.getName())
                .releaseDate(albumDTO.getReleaseDate())
                .build();
        return albumRepository.save(album);
    }

    public List<DownloadAlbumDTO> getAlbums() {
        List<Album> album = this.albumRepository.findAll();
        return album.stream().map(a -> {
            byte[] decompressedImage = decompressImage(a.getAlbumCover());
            String base64 = Base64.getEncoder().encodeToString(decompressedImage);
            return DownloadAlbumDTO.builder()
                    .artist(a.getArtist())
                    .name(a.getName())
                    .albumCover(base64)
                    .releaseDate(a.getReleaseDate())
                    .build();
        }).collect(Collectors.toList());
    }

    private byte[] compressImage(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setLevel(Deflater.BEST_COMPRESSION);
        deflater.setInput(data);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] temp = new byte[4 * 1024];
        while (!deflater.finished()) {
            int size = deflater.deflate(temp);
            outputStream.write(temp, 0, size);
        }

        try {
            outputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return outputStream.toByteArray();
    }

    private byte[] decompressImage(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] temp = new byte[4 * 1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(temp);
                outputStream.write(temp, 0, count);
            }
            outputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return outputStream.toByteArray();
    }
}
