import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, private alertController: AlertController, private router: Router) {
    this.formularioLogin = this.fb.group({
      'user': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }
  ngOnInit() {
  }
  
  async ingreso() {
    var f = this.formularioLogin.value;

    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');

   
    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Error al ingresar!',
        message: 'Llena todos los campos necesarios',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }
    else if(nombreUsuario == f.user && contrasenaUsuario == f.password){
      localStorage.setItem('autenticado','true')
      const alert = await this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Ingreso exitoso',
        message: 'bienvenido',
        buttons: ['Aceptar'],
      });

      await alert.present();
      this.router.navigate(['/tabs/tabs/tab1']);
    }
    else if(nombreUsuario != f.user ){
      const alert = await this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Error al ingresar!',
        message: 'Datos no coinciden',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }
    else if(contrasenaUsuario != f.password){
      const alert = await this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Error al ingresar!',
        message: 'Datos no coinciden',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }
  }

}
