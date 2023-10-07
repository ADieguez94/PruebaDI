import { Component } from '@angular/core';

@Component({
  selector: 'app-storeDetails',
  templateUrl: './storeDetails.component.html',
  styleUrls: ['./storeDetails.component.css']
})
export class StoreDetailsComponent {
  stores: any = [
    {
      storeNumber: "MX001",
      storeName: "Morelia",
      storeStatus: "Activo"
    },
    {
      storeNumber: "MX001",
      storeName: "Proshot Altozano",
      storeStatus: "Activo"
    },
  ]
}
