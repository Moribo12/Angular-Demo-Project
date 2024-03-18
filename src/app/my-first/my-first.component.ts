 import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent {

  name: string = " ";
  email: string = " ";
  message: string = " ";
  isSubmitted:boolean = false;
  messages: Array<any> =[];

  onSubmit(): void{
    this.isSubmitted = true;

    this.messages.push({
      "name" : this.name,
      "email": this.email,
      "message": this.message
    });
 console.log(this.messages)
  }

}
