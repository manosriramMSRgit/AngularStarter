import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-royal-enfield',
  templateUrl: './royal-enfield.component.html',
  styleUrls: ['./royal-enfield.component.css']
})
export class RoyalEnfieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  OnClick() {
    console.log(window.location.href)
    window.location.href = "https://www.royalenfield.com/"
  }

}
