import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListsComponent } from './test-lists.component';

describe('TestListsComponent', () => {
  let component: TestListsComponent;
  let fixture: ComponentFixture<TestListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
