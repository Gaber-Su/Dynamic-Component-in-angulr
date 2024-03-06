import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-labtop',
  templateUrl: './labtop.component.html',
  styleUrls: ['./labtop.component.css']
})
export class LabtopComponent implements OnInit {
  @Input() name: string = ''
  constructor() { }

  ngOnInit() {
  }

}
