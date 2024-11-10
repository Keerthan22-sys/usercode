import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { MusicPlayerState } from '../helpers/music-player-state';
import { tracks } from '../helpers/tracks';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  // Task 5: Retreive tracks here
  readonly tracks = tracks;
  state = MusicPlayerState;

  constructor(
    // Task 5: Declare private variables here
private musicService: MusicService) { }

  ngOnInit(): void {
  }

  // Task 5: Add playTrack() method here
playTrack(file: any){
  this.musicService.playNewFile(file);
}
  // Task 10: Add handleFavorites()) method here
handleFavorites(addorRemoveCheck:boolean, index:any) {
  const isFavorite = addorRemoveCheck === true ? true : false;
  tracks[index].isFavorite = isFavorite;
}

}
