import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-klasikarac',
  templateUrl: './klasikarac.component.html',
  styleUrls: ['./klasikarac.component.css']
})
export class KlasikaracComponent implements OnInit {

  klasikarac = [
    {id:3,img: "assets/img/k1.jpg", title: 'FORD 1928',info: '0 KM / 1.400.000 TL'},
    {id:4,img: "assets/img/k2.jpg", title: 'CHEVROLET 1955',info: '50.000 KM / 245.000 TL'},
   
];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(item){
    this.router.navigate(['/klasikarac',item.id])
  }
}
