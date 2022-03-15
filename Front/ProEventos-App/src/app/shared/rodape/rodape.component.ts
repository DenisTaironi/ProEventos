import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  showMenu(): boolean {
    if (this.router.url === '/user/login' || this.router.url === '/user/registration') {
      return false;
    }
    return true;
  }

}
