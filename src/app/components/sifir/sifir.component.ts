import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sifir',
  templateUrl: './sifir.component.html',
  styleUrls: ['./sifir.component.css']
})
export class SifirComponent implements OnInit {
  
  sifir = [   
    {id:3,img: "assets/img/k1.jpg", title: 'FORD 1928',info: '0 KM / 1.400.000 TL'},
    {id:7,img: "assets/img/arazi1.jpg", title: 'AUDI 2019',info: '0 KM / 1.550.000 TL'},
    {id:10,img: "assets/img/binek2.jpg", title: 'MERCEDES 2019',info: '0 KM / 495.000 TL'},
];

  constructor(private router:Router) { }

ngOnInit() {
}
onSelect(item){
  this.router.navigate(['/sifir',item.id])
}
}
