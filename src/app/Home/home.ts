import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'homeComponent',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  animations: [
    trigger('hover', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'hovered',
        style({
          transform: 'scale(1.05)',
        })
      ),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),
  ],
})
export class homeComponent implements OnInit {
  validMeet: any = [];
  constructor(private http: HttpClient, private router: Router) {}
  res: any = {};
  body = { doc_id: 'VlhBY4cBajuGGqRKS88o' };
  chartType: any;
  chartData: any;
  chartOptions: any;
  today: Date = new Date();
  tomorrow = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);
  hoverState: number | null = null;

  getDataFromBackend() {
    let params = new HttpParams();
    params = params.append('doc_id', this.body.doc_id);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', '*/*');
    const requestOptions = { headers: headers, params: params };
    this.http
      .get<any>(
        'https://i43ng2dyfi.execute-api.us-east-1.amazonaws.com/default/get_all_meet'
      )
      .subscribe((datos) => {
        this.res.meetings = datos;
        this.res = {
          ...this.res,
          userName: 'Juan Montoya',
          userId: '1Qweasd2123sdqEad123',
          email: 'juanjmontoya14@gmail.com',
          number: 3195991127,
          gender: 'Male',
          language: 'Spanish',
          company: 'NowBit',
          isActive: true,
          participation: 34,
          participationAvgCompany: 12.2,
        };
      });

    // if (this.resuserName == null) {
    // console.log('error peticion, asignar valores defecto');

    console.log('este es el response:', this.res);

    // }
  }

  goToMeeting() {
    this.router.navigate(['/meeting']);
  }
  setHoverState(index: number | null) {
    this.hoverState = index;
  }

  ngOnInit(): void {
    this.getDataFromBackend();
    setTimeout(() => {
      console.log('mierda esta: ', this.res);

      this.today.setHours(0, 0, 0, 0);
      this.tomorrow.setHours(0, 0, 0, 0);
      this.res.meetings.forEach((meet: any) => {
        let dateString = meet._source.date;
        let dateParts = dateString.split(' ');
        let month = dateParts[1].replace(',', '');
        let day = dateParts[2];
        let year = dateParts[3];
        let dateForm = new Date(`${month} ${day}, ${year}`);
        meet._source.dateFormate = dateForm;
        meet._source.dateFormate.setHours(0, 0, 0, 0);
        if (meet._source.dateFormate.getTime() == this.today.getTime()) {
          meet._source.validationDate = 'Today:';

          this.validMeet.push(meet);
        } else if (
          meet._source.dateFormate.getTime() == this.tomorrow.getTime()
        ) {
          meet._source.validationDate = 'Tomorrow:';

          this.validMeet.push(meet);
        } else if (
          meet._source.dateFormate.getTime() > this.tomorrow.getTime()
        ) {
          meet._source.validationDate = meet._source.date;

          this.validMeet.push(meet);
        } else {
          console.log('fecha pasada');
          meet = null;
        }
      });

      console.log('meetings: ', this.validMeet);
      this.chartData = {
        datasets: [
          {
            data: [this.res.participation, 100 - this.res.participation],
            backgroundColor: ['#9B8DFF', '#f9fafe'],
            label: 'Participation',
          },
        ],
        labels: ['You', 'Others'],
      };

      this.chartType = 'doughnut';

      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };
    }, 1000);
  }
}
