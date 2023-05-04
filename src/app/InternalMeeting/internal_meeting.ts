import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'internalMeeting',
  templateUrl: './internal_meeting.html',
  styleUrls: ['./internal_meeting.css'],
})
export class internalMeeting implements OnInit {
  constructor(private http: HttpClient) {}

  res: any;
  body = { doc_id: 'VlhBY4cBajuGGqRKS88o' };

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
        organizer: 'Juan',
        start_Time: '9:00 AM',
        end_Time: '10:00 AM',
        date: 'Sunday Februry 30, 2025',
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
      };
    }
  }

  ngOnInit(): void {
    this.getDataFromBackend();
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

  //
}
