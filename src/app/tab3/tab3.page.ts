import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private router:Router) {}

  compartirApp(){
    Share.share({
      title: 'Compartir la apli',
      url: 'https://www.youtube.com/watch?v=mCcxBOPiKPY',
      dialogTitle: 'Ta fina',
    });
  }

  ngOnInit() {
  }

  iralogin(){
    localStorage.removeItem('autenticado');
    this.router.navigate(['']);
  }

  iramapa(){
    this.router.navigate(['/mapa']);
  }
}
