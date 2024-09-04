// angular import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IUsuario } from 'src/app/Interfaces/IUsuario';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  frm_login = new FormGroup({
    nombre_usuario: new FormControl('', [Validators.required,Validators.email]),
    contrasenia: new FormControl('', [Validators.required])
  });

  constructor(private usuarioServicio:UsuariosService) { }

  login(){
    let usuario:IUsuario = {
      Nombre_usuario: this.frm_login.controls['nombre_usuario'].value,
      Contrasenia: this.frm_login.controls['contrasenia'].value,
    }
    console.log(usuario);
    this.usuarioServicio.login(usuario);
  }

  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
