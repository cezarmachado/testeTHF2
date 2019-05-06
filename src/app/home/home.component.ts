import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'teste';
  menus = [
    { label:'Hello World', link: './hello-world'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
