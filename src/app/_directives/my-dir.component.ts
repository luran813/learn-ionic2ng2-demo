import { Component } from '@angular/core';

@Component({
  selector:'my-dir',
  template: 'hello ,my dir'
})

export class MyDir{
  constructor(){
    console.log('hello,my dir');
  }
}