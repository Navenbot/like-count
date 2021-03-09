import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
count: any;
inp: any;
  constructor(private data: DataService) {
    this.count= 0;
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }



  check(){
 this.count += 1;

// if(this.count=1){
//   console.log('a');
// } else if(this.count=2){
//   console.log('b');
// } else if (this.count=3){
//   console.log('c');
// } else{
//   this.count = 0;
// }
 switch(this.count){
   case 1: console.log('a');
   break;

   case 2: console.log('b');
   break;
   
   case 3: console.log('c');
   break;

   default: console.log('ok');
   this.count = 0;
   break;
 }
console.log(this.count);

  }
}
