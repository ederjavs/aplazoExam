import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCharactersComponent } from './details-characters.component';

describe('DetailsCharactersComponent', () => {
  let component: DetailsCharactersComponent;
  let fixture: ComponentFixture<DetailsCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
