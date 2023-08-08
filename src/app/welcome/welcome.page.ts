import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  welcomeMessage: string = '';

  constructor(private route: ActivatedRoute) { }

   ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     const name = params.get('name');
  //     if (name) {
  //       this.welcomeMessage = `Welcome ${name}!`;
  //     }
  //   });  }
    const name = this.route.snapshot.paramMap.get('name');
      if (name) {
        this.welcomeMessage = `Welcome ${name}!`;
      }
  }}