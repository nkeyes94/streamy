import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AudioService } from '../services/audio.service';
import { CloudService } from '../services/cloud.service';
import { StreamState } from '../interfaces/stream-state';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  constructor(
    public audioService: AudioService,
    public cloudService: CloudService
  ) { 
    // * Get media files
    cloudService.getFiles().subscribe(files => {
      this.files = files;
    });
    // * Listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  playStream(url: any) { 
    this.audioService.playStream(url).subscribe((events: any) => {
      // Listen to events
    });
  }

  openFile(file: any, index: number) { 
    this.currentFile = { file, index};
    this.audioService.stop();
    this.playStream(file.url);
  }
  
  // * Adding audio methods from our service to our component
  // ? Pause
  pause() { 
    this.audioService.pause();
  }
  // ? Play
  play() {
    this.audioService.play();
  }
  // ? Stop
  stop() {
    this.audioService.stop();
  }
  // ? Next
  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  // ? Previous
  previous() {
    const index = this.currentFile -1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  // ? Is first playing
  isFirstPlaying() { 
    return this.currentFile.index === 0;
  }
  // ? Is last playing
  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change: { value: any; }) {
    this.audioService.seekTo(change.value);
  }

  ngOnInit(): void {
  }

  files: Array<any> = [];
  state: StreamState | undefined;
  currentFile: any = {};

  songs: Array<any> = [
    {title: 'Test', artist: 'Dad'},
    {title: 'Test2', artist: 'Dad2'},
  ];
  currentSong: any = {};

  isPlaying() {
    return true;
  }

}

