import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() size? = 'md';
  @Input() title? = 'Modal title';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  close() {
    this.elementRef.nativeElement.remove()
    this.closeEvent.emit()
  }
  submit() {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit()
  }

}
