import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(public loggingService: LoggingService) { }

  ngOnInit() {
  }

}
