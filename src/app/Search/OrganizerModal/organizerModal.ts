import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'OrganizerModal',
  templateUrl: './organizerModal.html',
  styleUrls: ['./organizerModal.css'],
})
export class OrganizerModal {
  @Input() organizers?: string[];

  constructor(public activeModal: NgbActiveModal) {}

  dismissModal() {
    this.activeModal.dismiss();
  }

  selectOrganizer(organizer: string) {
    // Implementa la lógica para manejar la selección del organizador aquí
    console.log('Organizer seleccionado:', organizer);
    this.activeModal.close(organizer);
  }
}
