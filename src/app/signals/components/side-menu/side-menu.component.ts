import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Contador',
      url: 'counter',
    },
    {
      title: 'Usuario',
      url: 'user-info',
    },
    {
      title: 'Mutaciones',
      url: 'properties',
    },
  ];
}
