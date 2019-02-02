import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  eventId: string;
  event: EventModel;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params['eventId'];
    this.http.get<EventModel>('http://localhost:8000/api/events/' + this.eventId).subscribe(response => {
      this.event = response;
    });
  }

}
