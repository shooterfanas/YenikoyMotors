import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-binek',
  templateUrl: './binek.component.html',
  styleUrls: ['./binek.component.css']
})
export class BinekComponent implements OnInit {

  binekarac = [
    {id:9,img: "assets/img/binek1.jpg", title: 'FORD 2018',info: '45.900 KM / 115.000 TL'},
    {id:10,img: "assets/img/binek2.jpg", title: 'MERCEDES 2019',info: '0 KM / 495.000 TL'},
   
];
constructor(private router:Router) { }

ngOnInit() {
}
onSelect(item){
  this.router.navigate(['/binek',item.id])
}
}
