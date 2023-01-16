import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PreviousOrders, PreviousOrdersService } from './previous-orders.service';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.css']
})
export class PreviousOrdersComponent implements OnInit {

  ordersSource = new MatTableDataSource<PreviousOrders>();
  displayedColumns = ["departure_date","arrival_date","from","to","departure_time","arrival_time","class","flight_company","person","price","total","status"];


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serviceOrders: PreviousOrdersService) { }

  ngOnInit(): void {
    this.ordersSource.data = this.serviceOrders.getData();
  }

  ngAfterViewInit(){
    this.ordersSource.sort = this.sort;
    this.ordersSource.paginator = this.paginator;
  }

  doFilter(filterValue: string){
    this.ordersSource.filter = filterValue.trim().toLowerCase();
  }

  viewButton(id: number) {
    this.serviceOrders.view(id);
  }
}
