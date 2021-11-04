import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  titulo = 'Login';
  model: any = {};


  constructor(public router: Router,
              public fb: FormBuilder,
              private toastr: ToastrService,
              private authService: AuthService,
              ) { }


  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['dashboard']);
    }
  }

  login(): any {
    this.authService.login(this.model).subscribe(
      () => { this.router.navigate(['dashboard']);
              this.toastr.success('Logado com sucesso'); },
      () => { this.toastr.error('Falha ao tentar logar'); },
    );
  }
}
