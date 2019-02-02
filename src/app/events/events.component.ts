import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventModel[] = [
    {
      title: 'Web Dev Days - Part 1',
      description: 'First event of the series.'
    },
    {
      title: 'Web Dev Days - Part 2',
      description: 'Second event of the series.'
    },
    {
      title: 'Web Dev Days - Part 3',
      description: 'Third event of the series.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
