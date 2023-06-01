import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { OrganizerModal } from './OrganizerModal/organizerModal';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'searchScreenComponent',
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
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
export class searchScreenComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  organizers = ['Organizer 1', 'Organizer 2', 'Organizer 3'];
  model: NgbDate | null;
  model2: NgbDate | null;
  modalReference: any;
  isModalOpen: boolean = false;
  today: Date = new Date();
  tomorrow = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);
  res: any = {};
  hoverState: number | null = null;

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private http: HttpClient,
    private router: Router
  ) {
    this.model = calendar.getToday();
    this.model2 = calendar.getNext(this.model);
  }

  goToMeetingByID(id: any) {
    this.router.navigate(['/meeting', id]);
  }

  setHoverState(index: number | null) {
    this.hoverState = index;
  }

  getDataFromBackend() {
    this.http
      .get<any>(
        'https://i43ng2dyfi.execute-api.us-east-1.amazonaws.com/default/get_all_meet'
      )
      .subscribe((datos) => {
        this.res.meetings = datos;
      });

    console.log('este es el response:', this.res);

    // }
  }
  isHovered(date: NgbDate) {
    return (
      this.model &&
      this.hoveredDate &&
      date.after(this.model) &&
      date.before(this.hoveredDate)
    );
  }

  openModal() {
    const modalRef = this.modalService.open(OrganizerModal, {
      size: 'lg', // Tamaño del modal personalizado
    });
    modalRef.componentInstance.organizers = this.organizers;

    modalRef.result.then(
      (result) => {
        // Maneja el resultado del modal aquí
        console.log('Resultado del modal:', result);
      },
      (reason) => {
        // Maneja el motivo de cierre del modal aquí
        console.log('Modal cerrado:', reason);
      }
    );
  }

  ngOnInit(): void {
    this.getDataFromBackend();
    setTimeout(() => {
      console.log('mierda esta: ', this.res);

      this.today.setHours(0, 0, 0, 0);
      this.tomorrow.setHours(0, 0, 0, 0);
      this.res.meetings!.forEach((meet: any) => {
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
        } else if (
          meet._source.dateFormate.getTime() == this.tomorrow.getTime()
        ) {
          meet._source.validationDate = 'Tomorrow:';
        } else if (
          meet._source.dateFormate.getTime() > this.tomorrow.getTime()
        ) {
          meet._source.validationDate = meet._source.date;
        } else {
          console.log('fecha pasada');
          // meet = null;
        }
      });
    }, 1000);
  }
}
