import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-spor',
  templateUrl: './spor.component.html',
  styleUrls: ['./spor.component.css']
})
export class SporComponent implements OnInit {

  sporarac = [
    {id:5,img: "assets/img/s1.jpg", title: 'ASTON MARTIN 2018',info: '3000 KM / 2.350.000 TL'},
    {id:6,img: "assets/img/s2.jpg", title: 'BMW 2015',info: '61.107 KM / 590.000 TL'},
   
];

constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(item){
    this.router.navigate(['/spor',item.id])
  }
}
