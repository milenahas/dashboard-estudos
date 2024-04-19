import { Component, OnInit } from '@angular/core';
const moment = require('moment');

@Component({
  selector: 'app-pomodoro-card',
  templateUrl: './pomodoro-card.component.html',
  styleUrls: ['./pomodoro-card.component.css']
})
export class PomodoroCardComponent implements OnInit {

  pomodoroMinutes = moment().minute(25).second(0).format('mm:ss');
  maxMin = 25;

  pomodoroOn: boolean = false;
  
  interval: any;
  timeout: any;

  constructor() { }

  ngOnInit(): void {
  }

  comecarPomodoro(){
    let initialValue = moment().minute(25).second(0);
    this.pomodoroOn = true;

    this.interval = setInterval(() => {
      initialValue.subtract(1, 'seconds').format('mm:ss');
      this.pomodoroMinutes = initialValue.format('mm:ss');
      this.pomodoroOn = true;
    }, 1000);
    
    this.timeout = setInterval(() => {
      const audio = new Audio();
      audio.src = "../../../../assets/sounds/alarm-clock.mp3";
      audio.load();
      audio.play();
      
      clearInterval(this.interval);
      clearInterval(this.timeout);
      this.pomodoroOn = false;
    }, this.maxMin * 60000);
  }

  cancelarPomodoro(){
    this.pomodoroOn = false;
    this.pomodoroMinutes = moment().minute(25).second(0).format('mm:ss');
    
    clearInterval(this.interval);
    clearInterval(this.timeout); 
  }

}
