import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalComponent } from '../modal.component';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalNotifier?: Subject<string>

  constructor(
    private resolve: ComponentFactoryResolver,
    private injector: Injector,
    // @INJEC(DOCUMENT) private document: Document
    @Inject(DOCUMENT) private document: Document,

  ) { }

  open(content: TemplateRef<any>, options?: { size?: string, title?: string }) {
    // create a component
    const modalComponentFactory = this.resolve.resolveComponentFactory(ModalComponent);
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes,
    ]);

    // // related to the modal as inputs an outputs
    modalComponent.instance.size = options?.size
    modalComponent.instance.title = options?.title
    // // related to the modal as outputs
    // // related to the modal as outputs
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal());

    modalComponent.hostView.detectChanges();
    this.document.body.appendChild(modalComponent.location.nativeElement);

    // // value
    this.modalNotifier = new Subject();
    return this.modalNotifier.asObservable()

  }

  closeModal() {
    this.modalNotifier?.complete()
  }
  submitModal() {
    this.modalNotifier?.next('complete');
    this.closeModal()
  }



}
