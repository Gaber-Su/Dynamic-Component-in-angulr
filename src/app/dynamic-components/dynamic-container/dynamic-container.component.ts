import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { LabtopComponent } from 'src/app/components/labtop/labtop.component';
import { MobileComponent } from 'src/app/components/mobile/mobile/mobile.component';
import { TabletComponent } from 'src/app/components/tablet/tablet/tablet.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container !: ViewContainerRef

  constructor() {
  }

  ngOnInit(): void {
    // this when open create a new container called mobile component
    this.createComponent('mobile')
  }


  // THIS IS WILL DYNAMICALLY CRAETE COMPONNETATION
  createComponent(componetName: string) {
    this.container.clear();
    const componetType = this.getComponetType(componetName)
    const componet = this.container.createComponent(componetType);

    // THIS IS FOR SHOW INPUT VALUE AND   AND YOU CAN YOUR MIND 
    if (componetName === 'mobile')
      componet.instance.name = '111111111111111'
    else
      componet.instance.name = componetName

  }





  //  THIS IS WILL RETURN THE COMPONENY
  getComponetType(name: string): Type<any> {
    let type: Type<any> = MobileComponent
    switch (name) {
      case 'mobile': {
        type = MobileComponent
        break
      }
      case 'labtob': {
        type = LabtopComponent
        break
      }
      case 'tablet': {
        type = TabletComponent
        break
      }
    }
    return type

  }

}
