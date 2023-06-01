import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'internalMeeting',
  templateUrl: './internal_meeting.html',
  styleUrls: ['./internal_meeting.css'],
})
export class internalMeeting implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  res: any;

  body: any = '';
  doc_id: any = '';
  // body = '{"doc_id": "wbTWdYgB1Zpsy4gQudsS"}';

  getDataFromBackend() {
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
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.doc_id = params['id'];
      this.body = JSON.stringify({ doc_id: this.doc_id });

      this.getDataFromBackend();
    });
  }

  //
}
