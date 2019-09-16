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
  private _values2 = [];
  constructor(private conduitCableTypeService: ConduitCableTypeService, private db: AngularFirestore) { }

  ngOnInit() {
    this.conduitCables = this.db.collection('ConduitSizeCableTypeList', ref => ref.orderBy('_id')).valueChanges();
  }

  //test code
  firstMethod(value){
    if (value == "1") {
      this._values2 = ["1.1", "1.2"];
    }
    else if (value == "2") {
      this._values2 = ["2.1", "2.2"];      
    }
    else if (value == "3") {
      this._values2 = ["3.1", "3.2"];      
    }
    else {
      this._values2 = [];
    }
  }
  //end test code

}
