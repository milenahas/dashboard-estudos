import { Component, Input, OnInit } from '@angular/core';
import { Cards } from '../../shared/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() card: Cards;

  constructor() { }

  ngOnInit(): void {
  }

}
