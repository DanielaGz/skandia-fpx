import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecomendedComponent } from './card-recommended.component';

describe('CardRecomendedComponent', () => {
  let component: CardRecomendedComponent;
  let fixture: ComponentFixture<CardRecomendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRecomendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
