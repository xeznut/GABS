import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockSitesListComponent } from './lock-sites-list.component';

describe('LockSitesListComponent', () => {
  let component: LockSitesListComponent;
  let fixture: ComponentFixture<LockSitesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockSitesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockSitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
