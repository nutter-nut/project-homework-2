import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Dataskill } from '../models/data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  Dataskill:Dataskill[];
  constructor(private backendService: BackendService) { 
    this.Dataskill = [];
  }

  ngOnInit(): void {
    this.Dataskill = this.backendService.getDataskill();
    console.log(this.Dataskill);
  }

}
