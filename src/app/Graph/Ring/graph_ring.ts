import { Component, Input } from '@angular/core';
import {
  BubbleDataPoint,
  ChartData,
  ChartDataset,
  ChartOptions,
  ChartType,
  ChartTypeRegistry,
  Point,
} from 'chart.js';
@Component({
  selector: 'graphRing',
  templateUrl: './graph_ring.html',
  styleUrls: ['./graph_ring.css'],
})
export class AnilloComponent {
  @Input()
  chartData: any;
  @Input() chartType: ChartType | undefined;
  @Input() chartOptions: ChartOptions | undefined;
}
