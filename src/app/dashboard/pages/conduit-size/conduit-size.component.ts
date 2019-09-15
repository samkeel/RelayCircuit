import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { conduitCableType } from '../Conduit/conduit.model';
import { Observable } from 'rxjs';
import { ConduitCableTypeService } from '../Conduit/conduit.service';

@Component({
  selector: 'app-conduit-size',
  templateUrl: './conduit-size.component.html',
  styleUrls: ['./conduit-size.component.css']
})
export class ConduitSizeComponent implements OnInit {
  conduitCables: Observable<any>;
  constructor(private conduitCableTypeService: ConduitCableTypeService, private db: AngularFirestore) { }

  ngOnInit() {
    this.conduitCables = this.db.collection('ConduitSizeCableTypeList', ref => ref.orderBy('id')).valueChanges();
  }

}
