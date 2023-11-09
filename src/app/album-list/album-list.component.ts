import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];
  photos: any = {};
  showPhotos: { [albumId: number]: boolean } = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.dataService.getAlbums().subscribe(
      (data: any) => {
        this.albums = data;
      },
      (error) => {
        console.error('Failed to fetch albums', error);
      }
    );
  }

  togglePhotos(albumId: number) {
    if (this.showPhotos[albumId]) {
      this.showPhotos[albumId] = false;
    } else {
      this.fetchPhotos(albumId);
      this.showPhotos[albumId] = true;
    }
  }

  fetchPhotos(albumId: number) {
    this.dataService.getPhotos(albumId)
      .subscribe(
        (data: any) => {
          this.photos[albumId] = data;
        },
        (error) => {
          console.error(`Failed to fetch photos for album ${albumId}`, error);
        }
      );
  }
}
