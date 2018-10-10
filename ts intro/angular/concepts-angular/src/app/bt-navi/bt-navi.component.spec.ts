import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtNaviComponent } from './bt-navi.component';

describe('BtNaviComponent', () => {
  let component: BtNaviComponent;
  let fixture: ComponentFixture<BtNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
