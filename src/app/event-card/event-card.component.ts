import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  event: EventModel = {
    title: 'Web Dev Days - 1',
    description: 'First event of the series: Web Dev Days'
  };

  constructor() { }

  ngOnInit() {
  }

}
