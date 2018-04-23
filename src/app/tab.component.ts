import { Component } from '@angular/core';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <button ion-button menuToggle icon-only>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>Tabs</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item *ngFor="let i of items">{{i}}</ion-item>
    </ion-list>
    <ion-infinite-scroll (ionInfinite)="doMore($event)">
      <ion-infinite-scroll-content></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
  `
})
export class TabsTextContentPage {
  items = ['sdfs','sfgbf','tyhrfd'];
  
  constructor() {
    for (var i = 0; i < 20; i++) {
      this.items.push( i+'sdvfsr' );
    }
  }

  doMore(event){
    setTimeout(() => {
      for (var i = 0; i < 20; i++) {
        this.items.push( i+'sdvfsr' );
      }
      event.complete();
    }, 1000);
  }
}

@Component({
  template: `

  
  <ion-tabs>
    <ion-tab tabIcon="ios-funnel" tabTitle="筛选" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="ios-time" tabTitle="时间" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="logo-yen" tabTitle="价格" [root]="rootPage"></ion-tab>
  </ion-tabs>`
})
export class TabsTextPage {
  rootPage = TabsTextContentPage;
  constructor() {
  }
}