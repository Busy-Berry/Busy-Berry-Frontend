import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'internalMeeting',
  templateUrl: './internal_meeting.html',
  styleUrls: ['./internal_meeting.css'],
})
export class internalMeeting implements OnInit {
  res = {
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

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
