import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

arabalar = [   
  {id:2,img: "assets/img/m2.jpg", title: 'HARLEY DAVIDSON 2015',info: '1.000 KM / 242.000 TL'},
    {id:3,img: "assets/img/k1.jpg", title: 'FORD 1928',info: '0 KM / 1.400.000 TL'},
    {id:4,img: "assets/img/k2.jpg", title: 'CHEVROLET 1955',info: '50.000 KM / 245.000 TL'},
    {id:6,img: "assets/img/s2.jpg", title: 'BMW 2015',info: '61.107 KM / 590.000 TL'},
    {id:7,img: "assets/img/arazi1.jpg", title: 'AUDI 2019',info: '0 KM / 1.550.000 TL'},
    
];
constructor(private router:Router) { }

ngOnInit() {
}
onSelect(item){
  this.router.navigate(['/home',item.id])
}
}
