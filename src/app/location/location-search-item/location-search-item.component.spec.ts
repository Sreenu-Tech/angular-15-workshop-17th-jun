import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchItemComponent } from './location-search-item.component';

describe('LocationSearchItemComponent', () => {
  let component: LocationSearchItemComponent;
  let fixture: ComponentFixture<LocationSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationSearchItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
