import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 9c047aacb5403877f20a51d13cd6b0f0af64f4a9

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
<<<<<<< HEAD
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
=======

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 9c047aacb5403877f20a51d13cd6b0f0af64f4a9
