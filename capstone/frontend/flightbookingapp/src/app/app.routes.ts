import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchResults } from './search-results/search-results';
import { Bookingcomp } from './bookingcomp/bookingcomp';
import { Payment } from './payment/payment';
import { Success } from './success/success';
import { Failure } from './failure/failure';
import { Flight } from './flight/flight';

export const routes: Routes = [
    {path:'',component:Flight},
    {path:'results',component:SearchResults},
    {path:'booking/:flightId',component:Bookingcomp},
    {path:'payment/:bookingId',component:Payment},
    {path:'success/:bookingId',component:Success},
    {path:'failure',component:Failure}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
