import { Injectable } from '@angular/core';
import { Dataabout, Datacontact, Dataportfolio, Dataskill } from './models/data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getDataabout(): Dataabout[] {
    return [{
      name:"Suphachai Wongnaphawiset",
      nickname:"Nut",
      age:21,
      height:167,
      weight:54
    }];
    }
  getDataportfolio(): Dataportfolio[] {
      return [{
        header:"No Portfolio",
      }];
      }
  getDataskill(): Dataskill[]{
    return [{
      skill:"Musical skills : Guitar"
    },
    {
      skill:"Sports skills : Football"
    },
    {
      skill:"Computer skills : Write a program"
    },
  ];
  }
  getDatacontact(): Datacontact[] {
    return [{
      facebook:"Suphachai",
      email:"wongnaph1234@gmail.com",
      line:"nuut1999",
      tel:"0931471158"
    }];
    }
}
