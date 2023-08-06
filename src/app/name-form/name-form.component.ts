import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
})
export class NameFormComponent  implements OnInit {
@Output() nameSubmitted = new EventEmitter <string>();
name: string = '';

  constructor() { }

  ngOnInit() {}
  
  onSubmit(){
      this.nameSubmitted.emit();
  }
}
