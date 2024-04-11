import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import '@fortawesome/fontawesome-free/js/all.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit{
  title = 'projeto-dashboard';

  ngOnInit(): void {

  }

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = '#F9F8FC';
  }
}
