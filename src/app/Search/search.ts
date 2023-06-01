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

@Component({
  selector: 'searchScreenComponent',
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
})
export class searchScreenComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  organizers = ['Organizer 1', 'Organizer 2', 'Organizer 3'];
  model: NgbDate | null;
  model2: NgbDate | null;
  modalReference: any;
  isModalOpen: boolean = false;

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

  goToMeeting() {
    this.router.navigate(['/meeting']);
  }

  ngOnInit(): void {}
}
