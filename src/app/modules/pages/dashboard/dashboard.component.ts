import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { Cursos } from '../../shared/cursos';
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
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Em andamento",
          data: [1, 2, 2, 3, 5, 2, 1, 3, 2, 1, 3, 3]
        },
        {
          name: "Finalizados",
          data: [1, 3, 2, 2, 4, 3, 2, 3, 1, 3, 2, 2]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      colors: ["#ff6172", "#ff9f7b"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1.5,
      },
      xaxis: {
        categories: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Dezembro"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
   }

  

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

}
