import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  songs: Array<any> = [
    {title: 'Test', artist: 'Dad'},
    {title: 'Test2', artist: 'Dad2'},
  ];
  state = {};
  currentSong: any = {};

  play(){}
  pause(){}
  isFirstPlaying(){
    return false;
  }
  isLastPlaying() {
    return true;
  }

}

