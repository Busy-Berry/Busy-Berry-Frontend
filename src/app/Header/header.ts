import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class header implements OnInit {
  @Input() idHeader: String = '';
  ngOnInit(): void {}
}
