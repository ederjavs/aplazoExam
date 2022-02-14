import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLocationsComponent } from './details-locations.component';

describe('DetailsLocationsComponent', () => {
  let component: DetailsLocationsComponent;
  let fixture: ComponentFixture<DetailsLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
