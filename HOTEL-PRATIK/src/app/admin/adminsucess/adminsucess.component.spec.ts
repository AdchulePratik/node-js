import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsucessComponent } from './adminsucess.component';

describe('AdminsucessComponent', () => {
  let component: AdminsucessComponent;
  let fixture: ComponentFixture<AdminsucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminsucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
