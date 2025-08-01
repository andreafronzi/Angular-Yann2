import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmaginePropertyBindingComponent } from './immagine-property-binding.component';

describe('ImmaginePropertyBindingComponent', () => {
  let component: ImmaginePropertyBindingComponent;
  let fixture: ComponentFixture<ImmaginePropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmaginePropertyBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmaginePropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
