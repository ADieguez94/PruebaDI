import { Component } from '@angular/core';

@Component({
  selector: 'app-orderDetails',
  templateUrl: './orderDetails.component.html',
  styleUrls: ['./orderDetails.component.css']
})
export class OrderDetailsComponent {
  products: any = [
    {
      product: "Holbox",
      productNumber: 1,
      productDate: "2022-08-22",
      productStatus: "Pagado"
  },
  {
      product: "Balandra",
      productNumber: 1,
      productDate: "2022-08-22",
      productStatus: "Pagado"
  },
  ]
}
