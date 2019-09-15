import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sidebar } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;
  sidebarSubscription: Subscription;
  navLists: Sidebar[] = []; //<--- hardcoded list
  // navItems: Observable<any>;

  constructor(private db: AngularFirestore, private sidebarService: SidebarService) { }

  ngOnInit() {
    // this.navItems = this.db.collection('sidebarList').valueChanges(); <-- database method
    this.navLists = this.sidebarService.getNavList();
    // console.log(this.navLists);
  }

  ngOnDestroy(){}

}
