import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoFormComponent } from './curriculo-form.component';

describe('CurriculoFormComponent', () => {
  let component: CurriculoFormComponent;
  let fixture: ComponentFixture<CurriculoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoFormComponent]
    });
    fixture = TestBed.createComponent(CurriculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
