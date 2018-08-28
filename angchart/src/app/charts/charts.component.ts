import { Component, OnInit  } from '@angular/core';
import * as Chart from 'chart.js';
import { MoviesService } from './movies.service';


@Component({
    selector: 'app-chart',
    templateUrl: './charts.component.html'
})

export class ChartComponent implements OnInit {
      barChart: any;
      barData;
      dataArray: any[] = [];
      labelArray: any[] = [];

      constructor(private _movies: MoviesService) {}

      ngOnInit(): void {
        this._movies.getMovies()
            .subscribe((data) => { this.barData = data;
                for (let i = 0; i < this.barData.length; i++) {
                    this.labelArray.push(this.barData[i].name);
                    this.dataArray.push(this.barData[i].rate);
                    this.barChart = new Chart('barChart', {
                        type: 'bar',
                    data: {
                        labels: this.labelArray,
                        datasets: [{
                            label: 'Number of Query',
                            data: this.dataArray,
                            backgroundColor: [
                                'rgb(1, 156, 222)',
                                'rgb(8, 176, 123)',
                                'rgb(1, 156, 222)',
                                'rgb(1, 156, 222)',
                                'rgb(1, 156, 222)',
                            ],
                            borderColor: [
                                'gray', 'gray', 'gray', 'gray', 'gray'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            text: 'BarChart',
                            display: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                    });
                }
            });
          }
}
