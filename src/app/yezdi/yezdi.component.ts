import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yezdi',
  templateUrl: './yezdi.component.html',
  styleUrls: ['./yezdi.component.css']
})
export class YezdiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {
    console.log(window.location.href)
    window.location.href = " https://www.yezdi.com/"
  }
}
