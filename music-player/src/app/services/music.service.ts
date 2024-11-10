import { Injectable } from '@angular/core';
import { MusicPlayerState } from '../helpers/music-player-state';
@Injectable({
  providedIn: 'root',
})
export class MusicService {
  // Task 3: Declate required variables here
state = MusicPlayerState;
audio = new Audio();

  constructor() {
      // Task 4: Add solution here

  }

  // Task 3: Add resumse() method here
resume() {
  this.audio.play();
  this.state.isPlaying = true;
}
  // Task 3: Add pause() method here
pause() {
  this.audio.pause();
  this.state.isPlaying = false;
}
  // Task 3: Add goToTime() method here

  goToTime(seconds: number){
    this.audio.currentTime = seconds;
    this.state.currentTime = this.audio.currentTime;
  }
  // Task 3: Add changePlaybackSpeed() method here
changePlaybackSpeed(speed: number) {
  this.audio.playbackRate = speed;
}

playNewFile (file: any) {
  this.state.isPlaying = true;
  this.state.activeTrack = file;
  this.audio.src = file.url;
  this.audio.play();
}

}
