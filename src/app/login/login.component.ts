import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "";
  senha : string = "";

  constructor(
    private auth : AuthService,
    private router : Router

  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.auth.login(this.email,this.senha)){
      this.router.navigate(["pagina-protegida"]);
      return;
    }
    alert("Login inválido")
    this.router.navigate(["login"]);
    this.email = "";
    this.senha = "";
    
  }

}
