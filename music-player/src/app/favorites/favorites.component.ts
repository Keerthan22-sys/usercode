import { Component, OnInit } from '@angular/core';
import { MusicPlayerState } from '../helpers/music-player-state';
import { MusicService } from '../services/music.service';
import { tracks } from '../helpers/tracks';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  // Task 11: Add required variables here
  state = MusicPlayerState;
  favTracks: any = [];
  constructor(
  // Task 11: Add private declarations here
private musicService: MusicService
  ) {}

  ngOnInit(): void {
    // Task 11: Retreive favorite tracks here
    tracks.forEach((track) => {
      if (track.isFavorite === true) {
        this.favTracks.push(track);
      }
    });
  }

  // Task 11: Add playTrack() method here
  playTrack(file: any) {
    this.musicService.playNewFile(file);
  }
  // Task 11: Add removeFromFavorites() method here
  removeFromFavorites(index: any) {
    tracks[tracks.indexOf(this.favTracks[index])].isFavorite = false;
    this.favTracks.splice(index, 1);
  }
}
