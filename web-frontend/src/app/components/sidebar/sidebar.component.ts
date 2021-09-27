import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/maps', title: 'Encontrar',  icon:'location_map-big', class: '' },
    { path: '/table-list', title: 'Mis Productos',  icon:'design_bullet-list-67', class: '' },
    { path: '/user-profile', title: 'Perfil de Usuario',  icon:'users_single-02', class: '' },
    { path: '/dashboard', title: 'Principal',  icon: 'design_app', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    { path: '/notifications', title: 'Login',  icon:'ui-1_bell-53', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
