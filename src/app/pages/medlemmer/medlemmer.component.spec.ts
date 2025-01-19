import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedlemmerComponent } from './medlemmer.component';

describe('MedlemmerComponent', () => {
  let component: MedlemmerComponent;
  let fixture: ComponentFixture<MedlemmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedlemmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedlemmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
