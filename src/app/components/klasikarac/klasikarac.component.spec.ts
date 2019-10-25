import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasikaracComponent } from './klasikarac.component';

describe('KlasikaracComponent', () => {
  let component: KlasikaracComponent;
  let fixture: ComponentFixture<KlasikaracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasikaracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasikaracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
