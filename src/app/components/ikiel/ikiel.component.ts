import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ikiel',
  templateUrl: './ikiel.component.html',
  styleUrls: ['./ikiel.component.css']
})
export class IkielComponent implements OnInit {

  ikiel2 = [   
    {id:1,img: "assets/img/m1.jpg", title: 'HARLEY DAVIDSON 2014',info: '18.973 KM / 162.500 TL'},
    {id:4,img: "assets/img/k2.jpg", title: 'CHEVROLET 1955',info: '50.000 KM / 245.000 TL'}, 
    {id:5,img: "assets/img/s1.jpg", title: 'ASTON MARTIN 2018',info: '3000 KM / 2.350.000 TL'},
    {id:6,img: "assets/img/s2.jpg", title: 'BMW 2015',info: '61.107 KM / 590.000 TL'},
    {id:9,img: "assets/img/binek1.jpg", title: 'FORD 2018',info: '45.900 KM / 115.000 TL'},
   
];

  constructor(private router:Router) { }

ngOnInit() {
}
onSelect(item){
  this.router.navigate(['/ikiel',item.id])
}
}
