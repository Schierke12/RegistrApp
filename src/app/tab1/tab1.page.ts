import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { format, Locale } from 'date-fns';
import es from 'date-fns/locale/es'; 


const API_URL = '4a52118d0e607a107498c9f4f4d5f196';
const API_KEY = 'https://api.openweathermap.org/data/2.5/';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  weatherTemp: any;
  fechaActual: string;
  constructor(private animateCtrl: AnimationController, private httpClient: HttpClient) {
    this.loadData();
    this.fechaActual = format(new Date(), 'EEEE, dd/MM/yyyy', { locale: es });
  }

  ngOnInit() {
    this.startAnimation();
    this.startAnimation2();
    this.startAnimation3();
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=Melipilla&appid=${API_KEY}`).subscribe((results: any) => {
      console.log(Date) ;
      this.weatherTemp = results;
      // console.log(this.weatherTemp);
      // this.weatherTemp.temp_max = (this.weatherTemp.temp_max * 1000)
      let sunsetTime = new Date(this.weatherTemp.sys.sunset * 1000);
      this.weatherTemp.sunset_time = sunsetTime.toLocaleTimeString();
      let currentDate = new Date();
      this.weatherTemp.isDay = (currentDate.getTime() < sunsetTime.getTime());
      this.weatherTemp.temp_celcius = (this.weatherTemp.main.temp - 273.15).toFixed(0);
      this.weatherTemp.temp_min = (this.weatherTemp.main.temp_min - 273.15).toFixed(0);
      this.weatherTemp.temp_max = (this.weatherTemp.main.temp_max - 273.15).toFixed(0);
      this.weatherTemp.temp_feels_like = (this.weatherTemp.main.feels_like - 273.15).toFixed(0);
    });
  }

  startAnimation() {
    const element = document.querySelector('.inicio-container');

    if (element) {
      const animation: Animation = this.animateCtrl.create()
        .addElement(element)
        .duration(1500)
        .iterations(1)
        .fromTo('transform', 'translate3d(100%, 0, 0)', 'translateX(0px)')
        .fromTo('opacity', '0.2', '1');

      animation.play();
    } else {
      console.error('Elemento no encontrado');
    }
  }
  startAnimation2() {
    const element = document.querySelector('.clima-container');

    if (element) {
      const animation: Animation = this.animateCtrl.create()
        .addElement(element)
        .duration(1500)
        .iterations(1)
        .fromTo('transform', 'translate3d(-100%, 0, 0)', 'translate3d(0px)')
        .fromTo('opacity', '0.2', '1');

      animation.play();
    } else {
      console.error('Elemento no encontrado');
    }
  }
  startAnimation3() {
    const element = document.querySelector('.noticias-container');

    if (element) {
      const animation: Animation = this.animateCtrl.create()
        .addElement(element)
        .duration(1500)
        .iterations(1)
        .fromTo('transform', 'translate3d(100%, 0, 0)', 'translateX(0px)')
        .fromTo('opacity', '0.2', '1');

      animation.play();
    } else {
      console.error('Elemento no encontrado');
    }
  }
}
