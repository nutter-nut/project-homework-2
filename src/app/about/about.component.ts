import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Dataabout } from '../models/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  Dataabout:Dataabout[];
  constructor(private backendService: BackendService) { 
    this.Dataabout = [];
  }

  ngOnInit(): void {
    this.Dataabout = this.backendService.getDataabout();
    console.log(this.Dataabout);
  }

}
