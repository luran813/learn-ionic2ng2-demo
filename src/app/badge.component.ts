import { Component } from '@angular/core';

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle icon-only>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Badges</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <ion-card style="max-width: 400px;">
        <img src="../assets/img/aa.jpg" style="max-width:390px;max-height:250px"/>

        <ion-card-content>
          <ion-card-title>
            Björk
          </ion-card-title>
          <p>
            Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes, but when...
          </p>
        </ion-card-content>

        <ion-item>
          <ion-icon name='musical-notes' item-left style="color: #d03e84"></ion-icon>
          Albums
          <ion-badge item-right>9</ion-badge>
        </ion-item>

        <ion-item>
          <ion-icon name='logo-twitter' item-left style="color: #55acee"></ion-icon>
          Followers
          <ion-badge item-right>260k</ion-badge>
        </ion-item>
      </ion-card>
    </ion-content>
  `
})

export class BadgePage { }