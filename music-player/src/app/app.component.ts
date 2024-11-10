import { Component } from '@angular/core';
import * as moment from 'moment';
import { MusicPlayerState } from './helpers/music-player-state';
import { tracks } from './helpers/tracks';
import { MusicService } from './services/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Task 6: Declare required constants here
 state = MusicPlayerState;
 readonly tracks = tracks; 
  // Task 9: Declare required constants here
  

  constructor(
    // Task 6: Declare private variable here
public musicService: MusicService
  ) {}

  ngOnInit(): void {
  }
  
  // Task 6: Add goToTime() method here
goToTime(change: any) {
  this.musicService.goToTime(change.value);
}
  // Task 6: Add getFormattedTime() method here
getFormattedTime(timeInSeconds: number) {
  return moment.utc(timeInSeconds * 1000).format('mm:ss');
}
  // Task 7: Add pause() method here
pause() {
  this.musicService.pause();
}
  // Task 7: Add resume() method here
resume() {
  this.musicService.resume();
}
  // Task 8: Add next() method here

  // Task 8: Add previous() method here

  // Task 9: Add changePlaybackSpeed() method here

  
}
