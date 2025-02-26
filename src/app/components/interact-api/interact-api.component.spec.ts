import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractAPIComponent } from './interact-api.component';

describe('InteractAPIComponent', () => {
  let component: InteractAPIComponent;
  let fixture: ComponentFixture<InteractAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
