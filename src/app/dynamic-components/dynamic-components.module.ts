import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';



@NgModule({
  declarations: [
    DynamicContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DynamicContainerComponent]
})
export class DynamicComponentsModule { }
