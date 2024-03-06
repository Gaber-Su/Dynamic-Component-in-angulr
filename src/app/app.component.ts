import { Component, TemplateRef } from '@angular/core';
import { ModalService } from './modal/services/modal.service';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-components';
  constructor(private modalService: ModalService) {
    // this.test()
  }


  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService.open(modalTemplate, { size: 'md', title: 'this is modal' })
      .subscribe(action => {
        console.log(action, 'this is action');

      })

  }

  test() {


    const behaviorSubject = new BehaviorSubject<number>(0);


    behaviorSubject.next(1); // Observer 1: 1
    behaviorSubject.subscribe((data) => console.log(`Observer 1: ${data}`));

    // behaviorSubject.subscribe((data) => console.log(`Observer 2: ${data}`));

    // behaviorSubject.next(2); // Observer 1: 2, Observer 2: 2



  }
}
