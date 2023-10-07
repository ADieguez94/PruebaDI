import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList: any = [
    {
      title: 'Pedidos',
      ref: '/',
    },
    {
      title: 'Ordenes',
      ref: '/orders/order_detail',
    },
    {
      title: 'Clientes',
      ref: '/',
    },
    {
      title: 'Almacenes',
      ref: '/',
    },
    {
      title: 'Tiendas',
      ref: '/stores',
    },
    {
      title: 'Proveedores',
      ref: '/',
    },
    {
      title: 'Productos',
      ref: '/productos',
    },
    {
      title: 'Envíos',
      ref: '/',
    },
    {
      title: 'Configuración',
      ref: '/',
    },
  ]
}
