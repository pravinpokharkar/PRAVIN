import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirePracComponent } from './dire-prac.component';

describe('DirePracComponent', () => {
  let component: DirePracComponent;
  let fixture: ComponentFixture<DirePracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirePracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirePracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
