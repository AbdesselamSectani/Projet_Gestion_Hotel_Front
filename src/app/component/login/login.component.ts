import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next : (tokens) => {
        this.loginService.getUser(this.loginForm.value.email).subscribe({
          next : (user) => {
            localStorage.clear();
            localStorage.setItem("User" , JSON.stringify({
              id: user.id,
              nom: user.nom, 
              prenom : user.prenom ,
              email: user.email, 
              telephone: user.telephone,
              adresse: user.adresse,
              cni: user.cni,
              tokens : {
                'Access_Token': tokens.Access_Token,
                'Refresh_Token': tokens.Refresh_Token
              }
            }));
            this.router.navigate(['']);
          }
        })
      },
      error : err => {
        alert("Invalid Credentials!");
      }
    })
  }
  
}
