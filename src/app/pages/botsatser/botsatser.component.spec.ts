import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsatserComponent } from './botsatser.component';

describe('BotsatserComponent', () => {
  let component: BotsatserComponent;
  let fixture: ComponentFixture<BotsatserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotsatserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotsatserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
