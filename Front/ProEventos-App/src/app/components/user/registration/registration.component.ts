import { ValidatorField } from './../../../helpers/ValidatorField';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '@app/models/User';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;
  user: User;

  constructor(public fb: FormBuilder,
              private toastr: ToastrService,
              private authService: AuthService,
              public router: Router) { }

  get f(): any { return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmPassword')
    };

    this.form = this.fb.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, formOptions);
  }

  public cadastrarUsuario(): any{
    if (this.form.valid) {
      this.user = Object.assign(this.form.value);
      console.log(this.user);
      this.authService.register(this.user).subscribe(
        () => {
          this.router.navigate(['/user/login']);
          this.toastr.success('Cadastro realizado', 'Sucesso');
        }, error => {
          const erro = error.error;
          erro.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Cadastro duplicado!', 'Erro');
                break;
              default:
                this.toastr.error(`Erro ao cadatrar usuário! CODE: ${element.code}`);
                console.log(erro);
                break;
            }
          });
        }
      );
    }
  }

}
