import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Datacontact } from '../models/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Datacontact:Datacontact[];
  constructor(private backendService: BackendService) { 
    this.Datacontact = [];
  }

  ngOnInit(): void {
    this.Datacontact = this.backendService.getDatacontact();
    console.log(this.Datacontact);
  }

}
