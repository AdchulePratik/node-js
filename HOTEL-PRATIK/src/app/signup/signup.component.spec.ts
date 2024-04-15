import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIGNUPComponent } from './signup.component';

describe('SIGNUPComponent', () => {
  let component: SIGNUPComponent;
  let fixture: ComponentFixture<SIGNUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SIGNUPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SIGNUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
