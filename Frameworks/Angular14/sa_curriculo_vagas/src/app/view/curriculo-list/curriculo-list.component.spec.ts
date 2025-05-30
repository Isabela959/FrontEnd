import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoListComponent } from './curriculo-list.component';

describe('CurriculoListComponent', () => {
  let component: CurriculoListComponent;
  let fixture: ComponentFixture<CurriculoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoListComponent]
    });
    fixture = TestBed.createComponent(CurriculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
