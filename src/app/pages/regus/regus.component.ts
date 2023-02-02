import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-regus',
  templateUrl: './regus.component.html',
  styleUrls: ['./regus.component.css']
})
export class RegusComponent implements OnInit{

  formRegistroUser!:FormGroup;

  constructor(private usuarioService:UsuarioService, private router:Router){

    this.formRegistroUser = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.usuarioService.registerUser(this.formRegistroUser.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error))
  }

  iniciarSesion(){
    this.router.navigate(['/login']);
  }
}
