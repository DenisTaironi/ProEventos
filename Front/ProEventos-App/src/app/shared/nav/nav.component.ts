import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  constructor(public router: Router,
              private toastr: ToastrService,
              public authService: AuthService) { }

  ngOnInit(): void {
  }

  showMenu(): boolean {
    if (this.router.url === '/user/login' || this.router.url === '/user/registration') {
      return false;
    }
    return true;
  }
  loggedIn(): any {
    return this.authService.loggedIn();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.toastr.show('Log Out');
    this.router.navigate(['/user/login']);
  }
}
