import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7234/Name';

  constructor(private http: HttpClient) { }
  
  checkName(): Observable <any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/names`);
  }
}
