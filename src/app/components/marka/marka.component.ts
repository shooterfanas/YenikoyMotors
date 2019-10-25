import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.css']
})
export class MarkaComponent implements OnInit {
  marka = [   
    {id:5,img: "assets/img/aston.png"},
    {id:6,img: "assets/img/bmw.png"},
    {id:9,img: "assets/img/ford.png"},
    {id:10,img: "assets/img/mercedes.png"},
];

  constructor(private router:Router) { }

ngOnInit() {
}
onSelect(item){
  this.router.navigate(['/marka',item.id])
}
}
