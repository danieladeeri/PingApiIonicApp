import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
})
export class NameFormComponent  implements OnInit {
[x: string]: any;

  constructor() { }

  ngOnInit() {}
  onSubmit(){
    console.log('Submitted')
  }
}
