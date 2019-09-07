import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;
  sidebarSubscription: Subscription;
  navItems: Observable<any>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.navItems = this.db.collection('sidebarList').valueChanges();
  }

  ngOnDestroy(){}

}
