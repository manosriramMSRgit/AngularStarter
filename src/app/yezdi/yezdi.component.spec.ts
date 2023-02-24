import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YezdiComponent } from './yezdi.component';

describe('YezdiComponent', () => {
  let component: YezdiComponent;
  let fixture: ComponentFixture<YezdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YezdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YezdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
