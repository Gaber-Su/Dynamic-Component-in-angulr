import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './components/mobile/mobile/mobile.component';
import { TabletComponent } from './components/tablet/tablet/tablet.component';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { LabtopComponent } from './components/labtop/labtop.component';
import { ModalService } from './modal/services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    TabletComponent,
    LabtopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicComponentsModule
  ],
  // providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
