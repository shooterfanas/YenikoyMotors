import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-motosiklet',
  templateUrl: './motosiklet.component.html',
  styleUrls: ['./motosiklet.component.css']
})
export class MotosikletComponent implements OnInit {

  motosikletler = [
    {id:1,img: "assets/img/m1.jpg", title: 'HARLEY DAVIDSON 2014',info: '18.973 KM / 162.500 TL'},
    {id:2,img: "assets/img/m2.jpg", title: 'HARLEY DAVIDSON 2015',info: '1.000 KM / 242.000 TL'},
   
];

  constructor( private router:Router) { }

  ngOnInit() {
  }

onSelect(item){
  this.router.navigate(['/motosiklet',item.id])
}

}
