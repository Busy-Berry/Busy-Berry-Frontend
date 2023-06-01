import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class sidebar implements OnInit {
  @Input() idSidebar = '';
  state = 'normal';
  isRecording: boolean;
  urlMeeting: string;
  meeting: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.isRecording = false;
    this.urlMeeting = '';
    this.meeting = this.formBuilder.group({
      url: ['', Validators.required],
    });
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToCalendar() {
    this.router.navigate(['/calendar']);
  }

  goToStats() {
    this.router.navigate(['/stats']);
  }

  goToSettings() {
    this.router.navigate(['/config']);
  }

  onStartRecord() {
    this.isRecording = true;
    this.urlMeeting = this.urlMeeting + this.meeting.get('url')!.value;

    console.log(this.urlMeeting);

    const formData = new FormData();
    formData.append('meeting_link', this.urlMeeting);

    this.http
      .post<any>(
        'http://ec2-3-95-167-250.compute-1.amazonaws.com:6550/join-meeting',
        formData // "meeting_link=https://meet.google.com/sfn-eehb-nbb?pli=1&authuser=1"
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  onStopRecord() {
    this.isRecording = false;
    this.http
      .post<any>(
        'http://ec2-3-95-167-250.compute-1.amazonaws.com:6550/stop-recording',
        ''
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.idSidebar);

      const mobileToggle = document.getElementById(
        'mobile-toggle' + this.idSidebar
      );
      console.log('mobileToggle: ', mobileToggle);

      const closeSidebar = document.getElementById(
        'sidebar-close' + this.idSidebar
      );
      console.log('mobileToggle: ', mobileToggle);

      const sidebarContainer = document.getElementById(
        'sidebar-container' + this.idSidebar
      );
      console.log('sidebarContainer: ', sidebarContainer);

      const mainMenu = document.getElementById('main-content' + this.idSidebar);
      console.log('main-content: ', mainMenu);

      const mainHeader = document.getElementById(
        'main-header' + this.idSidebar
      );
      console.log('mainHeader: ', mainHeader);
      mobileToggle!.addEventListener('click', () => {
        sidebarContainer!.style.display = 'block';

        setTimeout(() => {
          mainHeader!.style.paddingLeft = '450px';
          mainMenu!.style.paddingLeft = '400px';
          sidebarContainer!.style.left = '0';
        }, 300);
      });

      closeSidebar!.addEventListener('click', () => {
        setTimeout(() => {
          mainHeader!.style.paddingLeft = '0px';
          mainMenu!.style.paddingLeft = '0px';
          sidebarContainer!.style.left = '-50vw';
        }, 300);
      });
    }, 200);
  }
}
