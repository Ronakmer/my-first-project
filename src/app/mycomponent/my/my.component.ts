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
      title:"asd",
      desc:"zxc",
      active:true
     },
     {
      sno:2,
      title:"qwe",
      desc:"dfg",
      active:true
     },
     {
      sno:3,
      title:"ert",
      desc:"cvb",
      active:true
     },
    ]
  }

  ngOnInit(): void {
  }

}
