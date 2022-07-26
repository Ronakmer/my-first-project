import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import{mys} from "../../mys";

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  my:mys[];
  constructor() { 
    this.my=[
     {
      sno:1,
      title:"ronak",
      desc:"python",
      active:true
     },
     {
      sno:2,
      title:"jayraj",
      desc:"php",
      active:true
     },
     {
      sno:3,
      title:"abhay",
      desc:"python",
      active:true
     },
    ]
  }

  ngOnInit(): void {
  }

}
