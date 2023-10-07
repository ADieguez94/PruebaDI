import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//---------- COMPONENTS ----------
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StoreDetailsComponent } from './pages/storeDetails/storeDetails.component';
import { OrderDetailsComponent } from './pages/orderDetails/orderDetails.component';

const routes: Routes = [
  /* Home */
  {
    path: '',
    component: HomeComponent,
  },
  /* Stores */
  {
    path: 'stores',
    component: StoresComponent,
  },
  /* Store Details */
  {
    path: 'stores/store_detail',
    component: StoreDetailsComponent,
  },
  /* Order Details */
  {
    path: 'orders/order_detail',
    component: OrderDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
