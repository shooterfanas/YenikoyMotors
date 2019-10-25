import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinekComponent } from './binek.component';

describe('BinekComponent', () => {
  let component: BinekComponent;
  let fixture: ComponentFixture<BinekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
