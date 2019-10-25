import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkielComponent } from './ikiel.component';

describe('IkielComponent', () => {
  let component: IkielComponent;
  let fixture: ComponentFixture<IkielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
