import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventModel[] = [
    // {
    //   title: 'Web Dev Days - Part 1',
    //   description: 'First event of the series.'
    // },
    // {
    //   title: 'Web Dev Days - Part 2',
    //   description: 'Second event of the series.'
    // },
    // {
    //   title: 'Web Dev Days - Part 3',
    //   description: 'Third event of the series.'
    // }
  ];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<EventModel[]>('http://localhost:8000/api/events').subscribe(response => {
      this.events = response;
    });
  }

}
