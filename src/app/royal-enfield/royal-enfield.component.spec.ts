import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalEnfieldComponent } from './royal-enfield.component';

describe('RoyalEnfieldComponent', () => {
  let component: RoyalEnfieldComponent;
  let fixture: ComponentFixture<RoyalEnfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalEnfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalEnfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
