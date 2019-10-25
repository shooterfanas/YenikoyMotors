import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AraziComponent } from './arazi.component';

describe('AraziComponent', () => {
  let component: AraziComponent;
  let fixture: ComponentFixture<AraziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AraziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AraziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
