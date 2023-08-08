import { Component } from '@angular/core';
// import { NavController } from '@ionic/angular';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService, 
    // private navCtrl: NavController
    ) {}

  checkName(name: { name: string, password: string }) {
    // console.log('checkName method called');
    if (!name.name || !name.password) {
      alert('Please enter both a name and a password.');
      return;
    }
    this.apiService.checkName().subscribe(
      (response: any[]) => {
        // console.log('API Response:', response);

        const matchingNames = response.filter(
          item => item.name === name.name 
          && 
          item.password === name.password
        );
        
          if (matchingNames.length > 0) {
          alert ('Correct details');
          // this.navCtrl.navigateForward(`/welcome/${name.name}`);
          // console.log('correct')

        } else {
          alert ('Incorrect details');

          // console.log('incorrect')
        }
      },
    );
  }
}
