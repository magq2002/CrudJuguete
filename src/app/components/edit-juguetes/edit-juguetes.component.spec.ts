import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJuguetesComponent } from './edit-juguetes.component';

describe('EditJuguetesComponent', () => {
  let component: EditJuguetesComponent;
  let fixture: ComponentFixture<EditJuguetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJuguetesComponent]
    });
    fixture = TestBed.createComponent(EditJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
