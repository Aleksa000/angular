import { Injectable } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { travels } from 'src/app/travels';

export interface PreviousOrders {
  id: number;
  from:string;
  to:string;
  departure_time:string;
  arrival_time:string;
  class:string;
  flight_company:string;
  price: string;
  total: string;
  person: string;
  date?: Date;
  userId: number;
  status: 'cancelled' | 'done' | null;
  travels: number[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class PreviousOrdersService {

  constructor(public userService: UserService) { }

  public orders: PreviousOrders [] = [
    { id: 1,from:'Belgrade, SRB', to:'Budapest, HUN', departure_time:'15:00h', arrival_time:'15:45h', class:'Economy class', flight_company:'Air Serbia',person:'2' , price:'110€',total:'220€', date: new Date("2023-04-14"), userId: 200, status: 'cancelled', travels: [1, 2] },
    { id: 2,from:'Belgrade, SRB', to:'Ljubljana, SLO', departure_time:'11:00h', arrival_time:'11:45h', class:'Economy class', flight_company:'Adria Airways',person:'1' , price:'90€',total:'90€', date: new Date("2021-01-18"), userId: 200, status: 'cancelled', travels: [3, 4, 5] },
    { id: 3,from:'Belgrade, SRB', to:'Moscow, RUS', departure_time:'10:00h', arrival_time:'18:45h', class:'Business class', flight_company:'Aeroflot',person:'3' , price:'150€',total:'450€', date: new Date("2021-05-13"), userId: 200, status: 'done', travels: [6, 7, 8, 9] },
    { id: 4,from:'Belgrade, SRB', to:'Berlin, GER', departure_time:'09:00h', arrival_time:'12:00h', class:'Economy class', flight_company:'Air Berlin',person:'2' , price:'90€',total:'180€', date: new Date("2022-05-20"), userId: 200, status: 'done', travels: [13, 14, 15] },
    { id: 5,from:'Belgrade, SRB', to:'Paris, FRA', departure_time:'13:00h', arrival_time:'14:00h', class:'Economy class', flight_company:'Air France',person:'4' , price:'80€',total:'320€', date: new Date("2021-06-21"), userId: 200, status: 'cancelled', travels: [5,6] },
    { id: 6,from:'Belgrade, SRB', to:'Instanbul, TUR', departure_time:'17:00h', arrival_time:'19:00h', class:'Business class', flight_company:'AtlasGlobal',person:'2' , price:'150€',total:'300€', date: new Date(), userId: 300, status: 'done', travels: [8, 9, 10] },
    { id: 7,from:'Belgrade, SRB', to:'London, ENG', departure_time:'18:00h', arrival_time:'19:30h', class:'Business class', flight_company:'BritishAirways',person:'3' , price:'200€',total:'600€', date: new Date(), userId: 300, status: 'done', travels: [15,16,17] },
    { id: 8,from:'Belgrade, SRB', to:'Dubai, UAE', departure_time:'12:00h', arrival_time:'22:00h', class:'Business class', flight_company:'Emirates',person:'1' , price:'350€',total:'350€', date: new Date(), userId: 300, status: 'done', travels: [12,13] },
    { id: 9,from:'Belgrade, SRB', to:'Abu Dhabi, UAE', departure_time:'10:00h', arrival_time:'20:00h', class:'Business class', flight_company:'EtihadAirways',person:'3' , price:'400€',total:'1200€', date: new Date(), userId: 300, status: 'cancelled', travels: [8,9] },
    { id: 10,from:'Belgrade, SRB', to:'Sarajevo, BIH', departure_time:'16:00h', arrival_time:'16:45h', class:'Economy class', flight_company:'FlyBosnia',person:'2' , price:'50€',total:'100€', date: new Date(), userId: 300, status: 'cancelled', travels: [6,7] },
    { id: 11,from:'Belgrade, SRB', to:'MontenegroAirlines', departure_time:'19:00h', arrival_time:'19:30h', class:'Economy class', flight_company:'MontenegroAirlines',person:'3' ,price:'70€',total:'210€',date: new Date(), userId: 100, status: 'done', travels: [2,3,4] },
    { id: 12,from:'Belgrade, SRB', to:'Doha, QTR', departure_time:'08:00h', arrival_time:'18:00h', class:'Business class', flight_company:'QatarAirways',person:'2' , price:'450€',total:'900€', date: new Date(), userId: 100, status: 'cancelled', travels: [11] },
    
  ];

  orders1 = [];

  getData(){

    this.orders.forEach(element => {
      if (element.userId == this.userService.currentUser.id) {
        this.orders1.push(element);
      }
    });

    return this.orders1;
  }

  travels = travels;
  orders2 = [];

  view(id: number) {
    this.orders1.forEach(element0 => {      
      element0.travels.forEach(element1 => {
        travels.forEach(element => {
          if (element.id == element1 && element0.id == id) {
            this.orders2.push(element);
          }
        });
      });
    });
    return this.orders2;
  }
}
