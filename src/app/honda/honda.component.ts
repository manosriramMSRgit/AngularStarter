import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrls: ['./honda.component.css']
})
export class HondaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {
    console.log(window.location.href)
    window.location.href = "https://www.honda2wheelersindia.com/"
  }
}
