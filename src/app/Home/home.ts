import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { format } from 'date-fns';

@Component({
  selector: 'homeComponent',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class homeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  res: any;
  body = { doc_id: 'VlhBY4cBajuGGqRKS88o' };
  chartType: any;
  chartData: any;
  chartOptions: any;
  today: Date = new Date();
  tomorrow = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);
  getDataFromBackend() {
    let params = new HttpParams();
    params = params.append('doc_id', this.body.doc_id);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', '*/*');
    const requestOptions = { headers: headers, params: params };
    try {
      console.log('hola');
      this.http
        .get<any>(
          'https://i43ng2dyfi.execute-api.us-east-1.amazonaws.com/default/get_specific_meet',
          requestOptions
        )
        .subscribe((datos) => {
          this.res = datos;
        });
    } catch (error) {
      console.log('error: ', error);
    }

    if (this.res == null) {
      console.log('error peticion, asignar valores defecto');
      this.res = {
        userName: 'Randy Riley',
        userId: '1Qweasd2123sdqEad123',
        email: 'randy.riley@gmail.com',
        number: 12312313123,
        gender: 'Male',
        language: 'English',
        company: 'Global company',
        isActive: true,
        participation: 56,
        participationAvgCompany: 32,
        meetings: [
          {
            organizer: 'Juan',
            start_Time: '9:00 AM',
            end_Time: '10:00 AM',
            date: 'Sunday Februry 28, 2025',
            participants: ['Juan', 'Maria', 'pedro'],
            objective: ['Mejorar la calidad de atención al cliente'],
            description:
              'Se busca mejorar la calidad de atención al cliente mediante la capacitación del personal y la implementación de nuevas herramientas tecnológicas.',
            summary:
              'El objetivo es mejorar la calidad de atención al cliente a través de la capacitación y la implementación de herramientas tecnológicas.',
            commitments: [
              {
                assigned_to: 'María',
                asignament:
                  'Nos comprometemos a capacitar a nuestro personal en técnicas de atención al cliente y a implementar nuevas herramientas tecnológicas para mejorar la eficiencia y la satisfacción del cliente.',
              },
              {
                assigned_to: 'Juan',
                asignament:
                  'Nos comprometemos a revisar el feedback proporcionado por los usuarios y hacer un resumen puntual donde se exprese lo mas preocupante de nuestro equipo',
              },
            ],
            transcription: [
              {
                minute: 1,
                speaker: 'Juan',
                speak:
                  'Buenos días a todos, hoy nos reunimos para discutir cómo mejorar la calidad de atención al cliente.',
              },
              {
                minute: 3,
                speaker: 'María',
                speak:
                  'Propongo que empecemos por capacitar a nuestro personal en técnicas de atención al cliente.',
              },
              {
                minute: 5,
                speaker: 'Pedro',
                speak:
                  'Estoy de acuerdo con María, pero también deberíamos implementar nuevas herramientas tecnológicas para mejorar la eficiencia.',
              },
              {
                minute: 8,
                speaker: 'Juan',
                speak:
                  'Me parece una buena idea. ¿Alguien tiene alguna sugerencia específica?',
              },
            ],
          },
          {
            organizer: 'Pedro',
            start_Time: '11:00 AM',
            end_Time: '2:00 PM',
            date: 'Sunday May 5, 2025',
            participants: ['Maria', 'pedro'],
            objective: ['Mejorar la calidad de atención al cliente'],
            description:
              'Se implementación de nuevas herramientas tecnológicas.',
            summary:
              'El objetivo e alsdalsdadajosdasdiahnosinasodasdo aiosjdoasnd oknd nq n o nokansdo  n okfnda oción y la implementación de herramientas tecnológicas.',
            commitments: [
              {
                assigned_to: 'María',
                asignament:
                  'Nos comprometemos a capacitar a nuestro personal en técnicas de atención al cliente y a implementar nuevas herramientas tecnológicas para mejorar la eficiencia y la satisfacción del cliente.',
              },
              {
                assigned_to: 'pedro',
                asignament:
                  'Nos compromeasdasdqwed qw eqwdas f sumen puntual donde se exprese lo mas preocupante de nuestro equipo',
              },
            ],
            transcription: [
              {
                minute: 1,
                speaker: 'Pedro',
                speak:
                  'Buenos días a todos, hoy nos reunimos para discutir cómo mejorar la calidad de atención al cliente.',
              },
              {
                minute: 3,
                speaker: 'María',
                speak:
                  'Propongo que empecemos por capacitar a nuestro personal en técnicas de atención al cliente.',
              },
              {
                minute: 5,
                speaker: 'Pedro',
                speak:
                  'Estoy de acuerdo con María, pero también deberíamos implementar nuevas herramientas tecnológicas para mejorar la eficiencia.',
              },
              {
                minute: 8,
                speaker: 'María',
                speak:
                  'Me parece una buena idea. ¿Alguien tiene alguna sugerencia específica?',
              },
            ],
          },
        ],
      };
      this.res.meetings.forEach((meet: any) => {
        let dateString = meet.date;
        let dateParts = dateString.split(' ');
        let month = dateParts[1].replace(',', '');
        let day = dateParts[2];
        let year = dateParts[3];

        let dateForm = new Date(`${month} ${day}, ${year}`);
        meet.dateFormate = dateForm;

        console.log(
          'igual hoy: ',
          meet.dateFormate.getTime() == this.today.getTime()
        );
        console.log(
          'igual mañana: ',
          meet.dateFormate.getTime() == this.tomorrow.getTime()
        );
        console.log(
          'mayor hoy: ',
          meet.dateFormate.getTime() > this.tomorrow.getTime()
        );
      });
    }
  }

  ngOnInit(): void {
    this.getDataFromBackend();

    console.log(this.res);

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

    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebarContainer = document.getElementById('sidebar-container');
    const mainMenu = document.getElementById('main-content');
    const mainHeader = document.getElementById('main-header');
    mobileToggle!.addEventListener('click', () => {
      sidebarContainer!.style.display = 'block';

      setTimeout(() => {
        mainHeader!.style.paddingLeft = '450px';
        mainMenu!.style.paddingLeft = '400px';
        sidebarContainer!.style.left = '0';
        // sidebarContainer!.style.width = '100%';
      }, 300);
    });
  }
}
