import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { Cursos } from '../../shared/cursos';
import { DashboardServiceService } from '../../shared/dashboard-service.service';
declare var bootstrap: any;


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

  @ViewChild("chart") chart: ChartComponent;

  constructor(public dashboardService: DashboardServiceService) { }

  ngOnInit(): void {
    console.log(this.dashboardService.navigatorWidth);
    for (let i = 0; i < 3; i ++){
      this.cursosEmAndamento.push({
        nome: "Angular",
        progresso: "100%",
        imagem: "assets/img/angular.png"
      })
  
      this.cursosEmAndamento.push({
        nome: "React",
        progresso: "70%",
        imagem: "assets/img/react.png"
      })
  
      this.cursosEmAndamento.push({
        nome: "Node.js",
        progresso: "55%",
        imagem: "assets/img/nodejs.png"
      })
  
      this.cursosEmAndamento.push({
        nome: "UI/UX",
        progresso: "75%",
        imagem: "assets/img/uiux.png"
      })
    }
  }

}
