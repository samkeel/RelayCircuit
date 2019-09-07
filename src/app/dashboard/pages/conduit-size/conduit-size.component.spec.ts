import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConduitSizeComponent } from './conduit-size.component';

describe('ConduitSizeComponent', () => {
  let component: ConduitSizeComponent;
  let fixture: ComponentFixture<ConduitSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConduitSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConduitSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
