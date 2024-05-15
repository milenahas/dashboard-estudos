import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  apiUrl: string = "https://jsonplaceholder.typicode.com";

  private messagesSubject: Subject<string> = new Subject<string>();
  public navigatorWidth: any = document.getElementById('card-pai-height')!.clientWidth;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/user`)
  }

  sendMessage(message: string) {
    this.messagesSubject.next(message);
    console.log(this.messagesSubject);
  }

  receiveMessages(): Observable<string>{
    return this.messagesSubject.asObservable();
  }
}
