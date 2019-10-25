import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-arazi',
  templateUrl: './arazi.component.html',
  styleUrls: ['./arazi.component.css']
})
export class AraziComponent implements OnInit {
  araziarac = [
    {id:7,img: "assets/img/arazi1.jpg", title: 'AUDI 2019',info: '0 KM / 1.550.000 TL'},
    {id:8,img: "assets/img/arazi2.jpg", title: 'LAMBORGHINI 2019',info: '0 KM / 4.975..000 TL'},
   
];
constructor(private router:Router) { }

ngOnInit() {
}
onSelect(item){
  this.router.navigate(['/arazi',item.id])
}
}
