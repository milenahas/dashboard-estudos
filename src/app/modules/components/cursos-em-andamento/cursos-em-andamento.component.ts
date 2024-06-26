import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from '../../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-cursos-em-andamento',
  templateUrl: './cursos-em-andamento.component.html',
  styleUrls: ['./cursos-em-andamento.component.css']
})
export class CursosEmAndamentoComponent implements OnInit {

  chartOptions: Partial<ChartOptions> | any;

  loading: boolean = false;
  interval: any;

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
        height: 250,
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
    }
   }

  ngOnInit(): void {
    this.loading = true;

    var navigatorWidth: any = document.getElementById('card-pai-height');

    if (navigatorWidth.clientWidth > 1400) {
      this.chartOptions.chart.height = 250;
    } else {
      this.chartOptions.chart.height = 150;
    }

    this.interval = setInterval(() => {
      this.loading = false;
      clearInterval(this.interval);
    }, 1000);

    
  }

}
