import { Component, ViewChild } from '@angular/core';
import { Menu, NavController, Platform} from 'ionic-angular';


import { HelloPage } from './hello.component'
import { BadgePage } from './badge.component'
import { TabsTextPage } from './tab.component'
import { ModalPage  } from './modal.component'

@Component({
  templateUrl: 'app.component.html'
})

export class MyApp {
  rootPage: any;
  pages: Array<{title: string, component: any}>;;
  currentPlatform: string = 'ios';//平台环境。默认ios

  @ViewChild('content') content: NavController;
  @ViewChild(Menu) menu: Menu;


  constructor(public platform: Platform) {
    this.rootPage = HelloPage;
    this.pages = [
      { title: 'Badges', component: BadgePage },
      { title: 'Hello', component: HelloPage },
      { title: 'tabs', component: TabsTextPage },
      { title: 'modal', component: ModalPage }      
    ];
  }

  openPage(page) {
    this.content.setRoot(page.component);
    this.menu.close();
  }

  ngAfterContentInit() {
    if (this.platform.is('android')) {
    this.currentPlatform = 'android';
    } else if (this.platform.is('windows')) {
    this.currentPlatform = 'windows';
    }

    window.parent.postMessage(this.currentPlatform, '*');
  }
}