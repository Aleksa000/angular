import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PreviousOrdersComponent } from './cart/previous-orders/previous-orders.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommentComponent } from './comment/comment.component';
import { SeatComponent } from './seat/seat.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'previous-orders', component: PreviousOrdersComponent },
    { path: 'travel', component: TravelListComponent },
    {path: 'comment', component: CommentComponent},
    {path: 'seat', component: SeatComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
