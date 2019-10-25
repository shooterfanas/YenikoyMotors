import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SifirComponent } from './sifir.component';

describe('SifirComponent', () => {
  let component: SifirComponent;
  let fixture: ComponentFixture<SifirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SifirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SifirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
