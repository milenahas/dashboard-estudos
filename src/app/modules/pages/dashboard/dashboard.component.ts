import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { Cursos } from '../../shared/cursos';
import { DashboardServiceService } from '../../shared/dashboard-service.service';
declare var bootstrap: any;
const moment = require('moment');

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cursosEmAndamento: Cursos[] = [];
  pomodoroMinutes = moment().minute(25).second(0).format('mm:ss');
  maxMin = 25;

  pomodoroOn: boolean = false;
  
  interval: any;
  timeout: any;
  elapsedTime: number = 0;

  @ViewChild("chart") chart: ChartComponent;

  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i ++){
      this.cursosEmAndamento.push({
        nome: "Angular",
        progresso: "100%",
        imagem: "assets/img/angular.png"
      })
  
      this.cursosEmAndamento.push({
        nome: "React",
        progresso: "20%",
        imagem: "assets/img/react.png"
      })
  
      this.cursosEmAndamento.push({
        nome: "Node.js",
        progresso: "5%",
        imagem: "assets/img/nodejs.png"
      })
  
      this.cursosEmAndamento.push({
        nome: "UI/UX",
        progresso: "75%",
        imagem: "assets/img/uiux.png"
      })
    }
  }

  comecarPomodoro(){
    let initialValue = moment().minute(25).second(0);

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
