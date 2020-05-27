import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepurchaseComponent } from './salepurchase.component';

describe('SalepurchaseComponent', () => {
  let component: SalepurchaseComponent;
  let fixture: ComponentFixture<SalepurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalepurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
