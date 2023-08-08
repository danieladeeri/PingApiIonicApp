import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  checkName(name: { name: string, password: string }) {
    if (!name.name || !name.password) {
      alert('Please enter both a name and a password.');
      return;
    }
    this.apiService.checkName().subscribe(
      (response: any[]) => {
        const matchingNames = response.filter(
          item => item.name === name.name 
          && 
          item.password === name.password
        );
        // const matchingPassword = response.filter(item2 => item.password === name);
        // if (matchingNames.length > 0 && matchingNames[0].password === name.password) {

          if (matchingNames.length > 0) {
          alert ('Correct details');

          // console.log('correct')

        } else {
          alert ('Incorrect details');

          // console.log('incorrect')
        }
      },
    );
  }
}
