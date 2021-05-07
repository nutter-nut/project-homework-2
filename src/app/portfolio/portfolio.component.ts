import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Dataportfolio } from '../models/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  Dataportfolio:Dataportfolio[];
  constructor(private backendService: BackendService) { 
    this.Dataportfolio = [];
  }

  ngOnInit(): void {
    this.Dataportfolio = this.backendService.getDataportfolio();
    console.log(this.Dataportfolio);
  }

}
