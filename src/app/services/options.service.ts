import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {


  private  addEventUrl = 'http://localhost:3000/events/addEvent'
  private  addDeleteEventUrl = 'http://localhost:3000/events/deleteEvent/:id'


  constructor(private http : HttpClient) { }

  addEvent(eventData: any): Observable<any> {
    return this.http.post(this.addEventUrl, eventData)
  }

  deleteEvent(id: any): Observable<any> {
    return this.http.delete(this.addDeleteEventUrl, id);
  }
}
