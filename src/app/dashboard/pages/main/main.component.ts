import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cards: Observable<any>;

  constructor(private breakpointObserver: BreakpointObserver, private db: AngularFirestore) {}

  ngOnInit() {
    this.cards = this.db.collection('DashboardCardList', ref => ref.orderBy('id')).valueChanges()
  }
}
