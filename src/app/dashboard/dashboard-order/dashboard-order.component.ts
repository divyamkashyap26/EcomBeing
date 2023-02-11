import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orders = [];

  constructor() {}

  ngOnInit(): void {
    this.orders = [
      {
        id: 'e5dcdfsf',
        orderBy: 'Subin Adhikari',
        productId: 'cdfsfe5d',
        created: '11-feb-2023',
        status: 'complated',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Divyam Kashyap',
        productId: 'cdfsfe5d',
        created: '11-feb-2023',
        status: 'pending',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Pramod Tandle',
        productId: 'cdfsfe5d',
        created: '11-feb-2023',
        status: 'rejected',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Amit Kumar',
        productId: 'cdfsfe5d',
        created: '11-feb-2023',
        status: 'initialized',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Ameet Patil',
        productId: 'cdfsfe5d',
        created: '11-feb-2023',
        status: 'complated',
        price: 2145.0
      },
      
    ];
  }
}
