import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosikletComponent } from './motosiklet.component';

describe('MotosikletComponent', () => {
  let component: MotosikletComponent;
  let fixture: ComponentFixture<MotosikletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosikletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosikletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
