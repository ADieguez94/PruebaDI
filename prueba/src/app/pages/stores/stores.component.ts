import { Component } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  stores: any = [
    {
      storeNumber: "MX001",
      storeName: "eCommerce",
      storeStatus: "Activa"
    },
    {
      storeNumber: "MX002",
      storeName: "Proshot Altozano",
      storeStatus: "Activa"
    },
    {
      storeNumber: "MX003",
      storeName: "Tres Marías",
      storeStatus: "Activa"
    },
    {
      storeNumber: "MX004",
      storeName: "POS Torneo Golf",
      storeStatus: "Activa"
    },
  ]
}
