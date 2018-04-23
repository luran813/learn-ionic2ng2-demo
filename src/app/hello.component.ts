import { Component } from '@angular/core';

import { ActionSheetController, AlertController, ModalController } from 'ionic-angular';

// import { MyDir } from './_directives/my-dir.component'

import * as moment from 'moment';

@Component({
  templateUrl: 'hello.component.html'
})

export class HelloPage {
  date: any;
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
      this.date = moment().format();
  }

  openAction() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Msdlfldsdsds',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Kwefefo',
      value: 'value4'
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

  openModal(){
    // let modal = this.modalCtrl.create(ModalFilterContentPage);
    // modal.present();
  }
}

//


// @Component({
//   template: `
//     <ion-tabs>
//       <ion-tab tabIcon="ios-funnel" tabTitle="筛选" [root]="page"></ion-tab>
//       <ion-tab tabIcon="ios-time" tabTitle="时间" [root]="page"></ion-tab>
//       <ion-tab tabIcon="logo-yen" tabTitle="价格" [root]="page"></ion-tab>
//     </ion-tabs>`
// })
// export class ModalFilterContentPage {
//   page: any = HelloPage;

//   constructor() {
    
//   }
// }



