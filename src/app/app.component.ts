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
    this.apiService.checkName(name).subscribe(
      (response: any[]) => {
        const matchingNames = response.filter(item => item.name === name);
  
        if (matchingNames.length > 0) {
          prompt ('Correct details');
        } else {
          prompt ('Incorrect details');
        }
      },
    );
  }
  
}
