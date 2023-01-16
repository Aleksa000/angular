import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { MaterialModule } from './material.module';
import { UserService } from './auth/user.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelListComponent } from './travel-list/travel-list.component';
import { CartComponent } from './cart/cart.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { SeatComponent } from './seat/seat.component';
import { CommonModule } from "@angular/common";
import { PreviousOrdersComponent } from './cart/previous-orders/previous-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    WelcomeComponent,
    TravelListComponent,
    CartComponent,
    TravelDetailsComponent,
    PreviousOrdersComponent,
    SearchComponent,
    CommentComponent,
    CommentDetailsComponent,
    SeatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TravelListComponent },
      { path: 'travels/:travelsId', component: TravelDetailsComponent },
      { path: 'travel/:travelId', component: CommentDetailsComponent },
      { path: 'seats/:travelId', component:SeatComponent},
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [UserService],//komponenta koja moze da se umente u drugu
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent],
  schemas: []//komponenta koja se dostupna na svim stranicama
})
export class AppModule { }
