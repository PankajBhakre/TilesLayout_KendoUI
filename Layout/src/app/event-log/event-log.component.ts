import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.css']
})
export class EventLogComponent implements OnInit {
  @Input() public title: string;
  @Input() public events: string[];
  constructor() { }

  ngOnInit(): void {
  }
  
  public logEvents(event: string, i: number): string {
    return `${this.events.length - i}. ${event}`;
  }

}
