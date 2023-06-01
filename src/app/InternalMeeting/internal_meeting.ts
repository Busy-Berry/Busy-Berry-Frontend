import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'internalMeeting',
  templateUrl: './internal_meeting.html',
  styleUrls: ['./internal_meeting.css'],
})
export class internalMeeting implements OnInit {
  constructor(private http: HttpClient) {}

  res: any;
  body = '{"doc_id": "wbTWdYgB1Zpsy4gQudsS"}';

  getDataFromBackend() {
    // let params = new HttpParamFs();
    // params = params.append(this.body.doc_id);

    // let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Accept', '*/*');
    // const requestOptions = { headers: headers, params: params };
    // try {
    // console.log('hola');
    this.http
      .post<any>(
        'https://i43ng2dyfi.execute-api.us-east-1.amazonaws.com/default/get_specific_meet',
        this.body
        // { headers: headers }
      )
      .subscribe((response) => {
        console.log(response);
        this.res = response;
      });
    // } catch (error) {
    //   console.log('error: ', error);
    // }

    // if (this.res == null) {
    //   console.log('error peticion, asignar valores defecto');
    //   this.res = {
    //     organizer: 'Speaker 2',
    //     start_Time: '11:00 AM',
    //     end_Time: '1:00 PM',
    //     date: 'Thursday May 04, 2023',
    //     participants: ['Speaker 1', 'Speaker 2'],
    //     objective: [
    //       'Probar el bot, la demo y el flujo de trabajo de la aplicación, corregir problemas relacionados con la entrada del bot en las sesiones y completar el despliegue serverless.',
    //     ],
    //     description:
    //       'Durante la sesión, se discutió la necesidad de probar el funcionamiento del bot, la demo y el flujo de trabajo de la aplicación. Se mencionó que el bot debería estar grabando la sesión y se planteó la corrección de un problema en el que el bot no siempre entra a las sesiones. Además, se habló sobre la finalización del despliegue serverless y el trabajo de Guillermo en las pantallas de la aplicación.',
    //     summary:
    //       'La sesión se centró en probar el bot y la demo, así como en corregir problemas relacionados con su funcionamiento. Se mencionó la necesidad de completar el despliegue serverless y se asignaron responsabilidades para resolver los problemas identificados.',
    //     commitments: [
    //       {
    //         assigned_to: 'Speaker 2',
    //         asignament:
    //           'Se compromete a hacer que el bot funcione en modo headless para facilitar la implementación serverless.',
    //       },
    //       {
    //         assigned_to: 'Speaker 2',
    //         asignament:
    //           'Se compromete a preparar la función Lambda utilizando la documentación proporcionada para el despliegue serverless.',
    //       },
    //       {
    //         assigned_to: 'Speaker 2',
    //         asignament:
    //           'Espera que al hacer headless la versión de Selenium mencionada en la documentación, el problema de resolución se reduzca.',
    //       },
    //       {
    //         assigned_to: 'Speaker 1',
    //         asignament:
    //           'Menciona que con la documentación proporcionada, la aplicación debería funcionar una vez realizadas las pruebas con el despliegue serverless.',
    //       },
    //     ],
    //     transcription: [
    //       {
    //         minute: '0',
    //         speaker: 'Speaker 1',
    //         speak:
    //           'Perfecto, ahí se unió el bot. Bueno, el objetivo de esta sesión es probar el bot, probar la demo y todo el flujo de trabajo de la aplicación. En principio, si todo está marchando bien, el bot debería estar grabando la sesión. Luego deberíamos poder ver el resultado de la sesión en la aplicación. Hay que corregir ciertas cosas, como lo de que el bot no siempre entra a las sesiones. Y hay que terminar de hacer el despliegue serverless. Guillermo está trabajando en las pantallas. Entonces, pues nosotros tenemos que solucionar lo del bot. Vale, lo que está ocurriendo con el bot y me he estado dando cuenta, es que hay algo que quedó oprimido o en el momento en el que la pestaña no es la principal del computador y no tiene la ',
    //       },
    //       {
    //         minute: '1:05',
    //         speaker: 'Speaker 2',
    //         speak:
    //           'resolución correcta cuando se inicia, falla. Entonces me comprometo yo a hacer que esto esté funcionando de modo headless para poder hacer la implementación serverless mucho más sencilla.',
    //       },
    //       {
    //         minute: '1:18',
    //         speaker: 'Speaker 1',
    //         speak:
    //           'Bueno, de hecho ahí tiene algo y es que cuando lo pongamos en la implementación serverless, pues la resolución deja de existir per se. Entonces tendríamos que más bien hacer las pruebas con el despliegue serverless. Yo le pasé ahí la documentación que podemos utilizar para desplegar esto en Lambda. Y ya con eso estaría funcionando la aplicación. Ok, entonces con la documentación que me has dado',
    //       },
    //       {
    //         minute: '1:44',
    //         speaker: 'Speaker 2',
    //         speak:
    //           'empezaré a prepararlo, bueno, ver la función Lambda principalmente. Y después entonces, como esto es algo de resolución que está ocurriendo, voy a esperar que esto falle mucho menos cuando esté',
    //       },
    //       {
    //         minute: '1:58',
    //         speaker: 'Speaker 1',
    //         speak:
    //           'haciendo headless la versión de Selenium que me habías mandado la documentación. Perfecto. Yo creo que ya podemos dejar aquí la prueba. Ok, y eso voy a dar la señal de visiBerry para que se salga y ',
    //       },
    //       {
    //         minute: '2:13',
    //         speaker: 'Speaker 2',
    //         speak: 'déjela grabar.',
    //       },
    //     ],
    //   };
    // }
  }

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  //
}
