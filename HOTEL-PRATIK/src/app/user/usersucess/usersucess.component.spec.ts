import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersucessComponent } from './usersucess.component';

describe('UsersucessComponent', () => {
  let component: UsersucessComponent;
  let fixture: ComponentFixture<UsersucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
