import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {


  private  addEventUrl = 'localhost:3000/events/addEvents'

  constructor(private http : HttpClient) { }

  addEvent(eventData: any): Observable<any> {
    return this.http.post(this.addEventUrl, eventData)
  }
}
