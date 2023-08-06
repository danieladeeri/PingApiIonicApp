import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  checkName(name: string) {
    if (!name || name.trim() === '') {
      // Display an alert if no name is entered
      alert('Please enter a name.');
      return;
    }
    this.apiService.checkName(name).subscribe(
      (response: any[]) => {
        const matchingNames = response.filter(item => item.name === name);
  
        if (matchingNames.length > 0) {
          alert ('Correct details');
        } else {
          alert ('Incorrect details');
        }
      },
    );
  }
}
