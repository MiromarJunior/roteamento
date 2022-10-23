import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-protegida',
  templateUrl: './pagina-protegida.component.html',
  styleUrls: ['./pagina-protegida.component.css']
})
export class PaginaProtegidaComponent implements OnInit {

  constructor(
    private router : Router,
    private auth : AuthService
  ) { 
  
  }

  ngOnInit(): void {
    
  }
  logout(){
    this.auth.logout();
    this.router.navigate([""]);
  }
 
}
