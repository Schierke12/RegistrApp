import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  formularioRecuperar: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController) {
    this.formularioRecuperar = this.fb.group({
      'user': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'password_again': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  async recuperar() {
    var f = this.formularioRecuperar.value;

    if (this.formularioRecuperar.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Error al ingresar!',
        message: 'Llena todos los campos necesarios',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }else if (f.password != f.password_again) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } 
    else {
      var nombreUsuario = f.user;
      var contrasenaUsuario = f.password_again;

      localStorage.setItem('nombreUsuario', nombreUsuario);
      localStorage.setItem('contrasenaUsuario', contrasenaUsuario);

      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Recuperado correctamente',
        buttons: ['OK']
      });

      await alert.present();      
      this.router.navigate(['']);
    }
    
  }
}