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
            organizer: 'Speaker 2',
            start_Time: '11:00 AM',
            end_Time: '1:00 PM',
            date: 'Thursday May 04, 2023',
            participants: ['Speaker 1', 'Speaker 2'],
            objective: [
              'Probar el bot, la demo y el flujo de trabajo de la aplicación, corregir problemas relacionados con la entrada del bot en las sesiones y completar el despliegue serverless.',
            ],
            description:
              'Durante la sesión, se discutió la necesidad de probar el funcionamiento del bot, la demo y el flujo de trabajo de la aplicación. Se mencionó que el bot debería estar grabando la sesión y se planteó la corrección de un problema en el que el bot no siempre entra a las sesiones. Además, se habló sobre la finalización del despliegue serverless y el trabajo de Guillermo en las pantallas de la aplicación.',
            summary:
              'La sesión se centró en probar el bot y la demo, así como en corregir problemas relacionados con su funcionamiento. Se mencionó la necesidad de completar el despliegue serverless y se asignaron responsabilidades para resolver los problemas identificados.',
            commitments: [
              {
                assigned_to: 'Speaker 2',
                asignament:
                  'Se compromete a hacer que el bot funcione en modo headless para facilitar la implementación serverless.',
              },
              {
                assigned_to: 'Speaker 2',
                asignament:
                  'Se compromete a preparar la función Lambda utilizando la documentación proporcionada para el despliegue serverless.',
              },
              {
                assigned_to: 'Speaker 2',
                asignament:
                  'Espera que al hacer headless la versión de Selenium mencionada en la documentación, el problema de resolución se reduzca.',
              },
              {
                assigned_to: 'Speaker 1',
                asignament:
                  'Menciona que con la documentación proporcionada, la aplicación debería funcionar una vez realizadas las pruebas con el despliegue serverless.',
              },
            ],
            transcription: [
              {
                minute: '0',
                speaker: 'Speaker 1',
                speak:
                  'Perfecto, ahí se unió el bot. Bueno, el objetivo de esta sesión es probar el bot, probar la demo y todo el flujo de trabajo de la aplicación. En principio, si todo está marchando bien, el bot debería estar grabando la sesión. Luego deberíamos poder ver el resultado de la sesión en la aplicación. Hay que corregir ciertas cosas, como lo de que el bot no siempre entra a las sesiones. Y hay que terminar de hacer el despliegue serverless. Guillermo está trabajando en las pantallas. Entonces, pues nosotros tenemos que solucionar lo del bot. Vale, lo que está ocurriendo con el bot y me he estado dando cuenta, es que hay algo que quedó oprimido o en el momento en el que la pestaña no es la principal del computador y no tiene la ',
              },
              {
                minute: '1:05',
                speaker: 'Speaker 2',
                speak:
                  'resolución correcta cuando se inicia, falla. Entonces me comprometo yo a hacer que esto esté funcionando de modo headless para poder hacer la implementación serverless mucho más sencilla.',
              },
              {
                minute: '1:18',
                speaker: 'Speaker 1',
                speak:
                  'Bueno, de hecho ahí tiene algo y es que cuando lo pongamos en la implementación serverless, pues la resolución deja de existir per se. Entonces tendríamos que más bien hacer las pruebas con el despliegue serverless. Yo le pasé ahí la documentación que podemos utilizar para desplegar esto en Lambda. Y ya con eso estaría funcionando la aplicación. Ok, entonces con la documentación que me has dado',
              },
              {
                minute: '1:44',
                speaker: 'Speaker 2',
                speak:
                  'empezaré a prepararlo, bueno, ver la función Lambda principalmente. Y después entonces, como esto es algo de resolución que está ocurriendo, voy a esperar que esto falle mucho menos cuando esté',
              },
              {
                minute: '1:58',
                speaker: 'Speaker 1',
                speak:
                  'haciendo headless la versión de Selenium que me habías mandado la documentación. Perfecto. Yo creo que ya podemos dejar aquí la prueba. Ok, y eso voy a dar la señal de visiBerry para que se salga y ',
              },
              {
                minute: '2:13',
                speaker: 'Speaker 2',
                speak: 'déjela grabar.',
              },
            ],
          },
          {
            organizer: 'Ana',
            start_Time: '2:00 PM',
            end_Time: '4:00 PM',
            date: 'Saturday March 15, 2025',
            participants: ['Ana', 'Carlos', 'Sofia', 'Manuel'],
            objective: ['Desarrollar nuevas estrategias de marketing'],
            description:
              'El objetivo es discutir y desarrollar nuevas estrategias de marketing para aumentar las ventas y la rentabilidad de la empresa.',
            summary:
              'El objetivo es desarrollar nuevas estrategias de marketing para aumentar las ventas y la rentabilidad de la empresa.',
            commitments: [
              {
                assigned_to: 'Carlos',
                asignament:
                  'Nos comprometemos a investigar sobre el mercado y la competencia para tener una mejor idea de lo que se está haciendo y lo que podemos hacer mejor.',
              },
              {
                assigned_to: 'Sofia',
                asignament:
                  'Nos comprometemos a desarrollar una campaña de publicidad efectiva para dar a conocer nuestros productos y servicios a nuestro público objetivo.',
              },
              {
                assigned_to: 'Manuel',
                asignament:
                  'Nos comprometemos a mejorar la experiencia del cliente para que regresen a nosotros y recomienden nuestros productos y servicios.',
              },
            ],
            transcription: [
              {
                minute: 1,
                speaker: 'Ana',
                speak:
                  'Bienvenidos a esta reunión para discutir y desarrollar nuevas estrategias de marketing.',
              },
              {
                minute: 3,
                speaker: 'Carlos',
                speak:
                  'Propongo que empecemos por investigar sobre el mercado y la competencia para tener una mejor idea de lo que se está haciendo y lo que podemos hacer mejor.',
              },
              {
                minute: 5,
                speaker: 'Sofia',
                speak:
                  'Estoy de acuerdo con Carlos, pero también deberíamos desarrollar una campaña de publicidad efectiva para dar a conocer nuestros productos y servicios a nuestro público objetivo.',
              },
              {
                minute: 8,
                speaker: 'Manuel',
                speak:
                  'Me parece una buena idea. ¿Alguien tiene alguna sugerencia específica?',
              },
            ],
          },
          {
            organizer: 'Laura',
            start_Time: '2:30 PM',
            end_Time: '4:00 PM',
            date: 'Friday June 12, 2026',
            participants: ['Laura', 'David', 'Sophie', 'Michael'],
            objective: ['Evaluar el desempeño del equipo'],
            description:
              'La reunión tiene como objetivo evaluar el desempeño del equipo en el último trimestre y establecer medidas para mejorar la productividad.',
            summary:
              'El objetivo es evaluar el desempeño del equipo en el último trimestre y establecer medidas para mejorar la productividad.',
            commitments: [
              {
                assigned_to: 'David',
                asignament:
                  'Me comprometo a desarrollar un plan de capacitación para mejorar las habilidades del equipo.',
              },
              {
                assigned_to: 'Sophie',
                asignament:
                  'Me comprometo a revisar los procesos y hacer recomendaciones para optimizar el flujo de trabajo.',
              },
              {
                assigned_to: 'Michael',
                asignament:
                  'Me comprometo a establecer un sistema de seguimiento para monitorear el progreso del equipo.',
              },
            ],
            transcription: [
              {
                minute: 1,
                speaker: 'Laura',
                speak:
                  'Bienvenidos a esta reunión de evaluación del desempeño del equipo. Gracias por su tiempo.',
              },
              {
                minute: 3,
                speaker: 'David',
                speak:
                  'Quiero empezar diciendo que creo que hemos hecho un buen trabajo en el último trimestre, pero siempre hay espacio para mejorar.',
              },
              {
                minute: 6,
                speaker: 'Sophie',
                speak:
                  'Estoy de acuerdo con David. Me gustaría revisar los procesos para ver si hay formas de optimizar el flujo de trabajo.',
              },
              {
                minute: 9,
                speaker: 'Michael',
                speak:
                  'También me gustaría establecer un sistema de seguimiento para monitorear el progreso del equipo.',
              },
              {
                minute: 12,
                speaker: 'Laura',
                speak:
                  'Excelente, entonces podemos asignar estas tareas y reunirnos nuevamente en un mes para ver cómo hemos progresado.',
              },
            ],
          },
          {
            organizer: 'Karen',
            start_Time: '10:00 AM',
            end_Time: '11:00 AM',
            date: 'Saturday May 6, 2023',
            participants: ['Karen', 'Sofia', 'John', 'Lucas'],
            objective: ['Planificar el lanzamiento del nuevo producto'],
            description:
              'En esta reunión, discutiremos los detalles del lanzamiento de nuestro nuevo producto y elaboraremos un plan para asegurar el éxito del lanzamiento.',
            summary:
              'El objetivo es planificar el lanzamiento del nuevo producto y elaborar un plan para asegurar el éxito del lanzamiento.',
            commitments: [
              {
                assigned_to: 'Sofia',
                asignament:
                  'Me comprometo a elaborar una estrategia de marketing para el lanzamiento del producto.',
              },
              {
                assigned_to: 'John',
                asignament:
                  'Me comprometo a coordinar con el equipo de ventas para asegurarnos de que el producto llegue a los clientes potenciales.',
              },
              {
                assigned_to: 'Lucas',
                asignament:
                  'Me comprometo a establecer un plan de seguimiento paraa segurarnos de que el producto esté funcionando correctamente y a recopilar comentarios de los clientes para hacer mejoras si es necesario.',
              },
            ],
            transcription: [
              {
                minute: 1,
                speaker: 'Karen',
                speak:
                  'Hola a todos, gracias por asistir a esta reunión. Hoy discutiremos los detalles del lanzamiento de nuestro nuevo producto y elaboraremos un plan para asegurar el éxito del lanzamiento.',
              },
              {
                minute: 3,
                speaker: 'Sofia',
                speak:
                  'Propongo que empecemos por elaborar una estrategia de marketing para el lanzamiento del producto.',
              },
              {
                minute: 5,
                speaker: 'John',
                speak:
                  'Estoy de acuerdo con Sofia. También deberíamos coordinar con el equipo de ventas para asegurarnos de que el producto llegue a los clientes potenciales.',
              },
              {
                minute: 8,
                speaker: 'Lucas',
                speak:
                  'Además, deberíamos establecer un plan de seguimiento para asegurarnos de que el producto esté funcionando correctamente y recopilar comentarios de los clientes para hacer mejoras si es necesario.',
              },
              {
                minute: 10,
                speaker: 'Karen',
                speak:
                  'Perfecto, tenemos nuestras tareas definidas. ¿Alguien tiene algo más que agregar antes de terminar la reunión?',
              },
            ],
          },
          {
            organizer: 'Ana',
            start_Time: '3:00 PM',
            end_Time: '4:00 PM',
            date: 'Wednesday November 1, 2028',
            participants: ['Ana', 'Carlos', 'Marta', 'Pablo'],
            objective: ['Discutir el presupuesto para el próximo trimestre'],
            description:
              'En esta reunión, discutiremos el presupuesto para el próximo trimestre y tomaremos decisiones sobre la asignación de recursos para maximizar la eficiencia y la rentabilidad de la empresa.',
            summary:
              'El objetivo es discutir el presupuesto para el próximo trimestre y tomar decisiones sobre la asignación de recursos para maximizar la eficiencia y la rentabilidad de la empresa.',
            commitments: [
              {
                assigned_to: 'Carlos',
                asignament:
                  'Me comprometo a revisar los gastos del trimestre anterior y hacer recomendaciones sobre cómo podemos reducir costos.',
              },
              {
                assigned_to: 'Marta',
                asignament:
                  'Me comprometo a analizar los ingresos y proponer nuevas oportunidades de negocio para aumentar los ingresos.',
              },
              {
                assigned_to: 'Pablo',
                asignament:
                  'Me comprometo a revisar los planes de inversión y hacer recomendaciones sobre cómo podemos maximizar el retorno de inversión.',
              },
            ],
            transcription: [
              {
                minute: 1,
                speaker: 'Ana',
                speak:
                  'Hola a todos, gracias por asistir a esta reunión. Hoy discutiremos el presupuesto para el próximo trimestre y tomaremos decisiones sobre la asignación de recursos para maximizar la eficiencia y la rentabilidad de la empresa.',
              },
              {
                minute: 3,
                speaker: 'Carlos',
                speak:
                  'Propongo que empecemos por revisar los gastos del trimestre anterior y hacer recomendaciones sobre cómo podemos reducir costos.',
              },
            ],
          },
        ],
      };

      this.today.setHours(0, 0, 0, 0);
      this.tomorrow.setHours(0, 0, 0, 0);
      this.res.meetings.forEach((meet: any) => {
        let dateString = meet.date;
        let dateParts = dateString.split(' ');
        let month = dateParts[1].replace(',', '');
        let day = dateParts[2];
        let year = dateParts[3];
        let dateForm = new Date(`${month} ${day}, ${year}`);
        meet.dateFormate = dateForm;
        meet.dateFormate.setHours(0, 0, 0, 0);
        if (meet.dateFormate.getTime() == this.today.getTime()) {
          meet.validationDate = 'Today:';
        } else if (meet.dateFormate.getTime() == this.tomorrow.getTime()) {
          meet.validationDate = 'Tomorrow:';
        } else if (meet.dateFormate.getTime() > this.tomorrow.getTime()) {
          meet.validationDate = meet.date;
        } else {
          meet.validationDate = null;
        }
        console.log(
          'Fechas: ',
          meet.validationDate,
          '/ Hoy: ',
          this.today,
          '/ Mañana: ',
          this.tomorrow,
          '/ otra data: ',
          meet.dateFormate
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
