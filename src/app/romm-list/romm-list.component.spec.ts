import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RommListComponent } from './romm-list.component';

describe('RommListComponent', () => {
  let component: RommListComponent;
  let fixture: ComponentFixture<RommListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RommListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RommListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
