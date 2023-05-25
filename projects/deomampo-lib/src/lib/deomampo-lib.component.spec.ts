import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeomampoLibComponent } from './deomampo-lib.component';

describe('DeomampoLibComponent', () => {
  let component: DeomampoLibComponent;
  let fixture: ComponentFixture<DeomampoLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeomampoLibComponent]
    });
    fixture = TestBed.createComponent(DeomampoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
