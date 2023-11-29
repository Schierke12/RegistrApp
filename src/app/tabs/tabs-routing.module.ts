import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginPage } from '../login/login.page';
import { RecuperarPage } from '../recuperar/recuperar.page';
import { RegistroPage } from '../registro/registro.page';
import { ValidadoGuard } from '../guard/validado.guard';
import { MapaPage } from '../mapa/mapa.page';



const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'recuperar',
    component: RecuperarPage
  },
  {
    path: 'registro',
    component: RegistroPage
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        canActivate: [ValidadoGuard],
        data: {
          animation: 'slide-in'
        }
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        canActivate: [ValidadoGuard],
        data: {
          animation: 'slide-in'
        }
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
        canActivate: [ValidadoGuard],
        data: {
          animation: 'slide-in'
        }
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'recuperar',
        redirectTo: '/recuperar',
        pathMatch: 'full'
      },
      {
        path: 'registro',
        redirectTo: '/registro',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'mapa',
    component: MapaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
