import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HelloPage } from './hello.component';
import { BadgePage } from './badge.component';
import { TabsTextPage, TabsTextContentPage } from './tab.component'
import { ModalPage, ModalContentPage  } from './modal.component'

import { MyDir } from './_directives/my-dir.component'


@NgModule({
  declarations: [
    MyApp,
    HelloPage,
    BadgePage,
    TabsTextContentPage,
    TabsTextPage,
    ModalContentPage,
    ModalPage,
    MyDir
  ],
  imports: [IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloPage,
    BadgePage,
    TabsTextContentPage,
    TabsTextPage,
    ModalContentPage,
    ModalPage,
    MyDir
  ],
  providers: []
})

export class AppModule {}

