import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require username, email and password', () => {
    expect(component.form.controls.userName.valid).toBe(false);
    expect(component.form.controls.email.valid).toBe(false);
    expect(component.form.controls.password.valid).toBe(false);
  });

  it('should reject mismatched passwords', () => {
    component.form.controls.password.setValue('Password@123');
    component.form.controls.confirmPassword.setValue('Password@456');

    expect(component.form.hasError('passwordMismatch')).toBe(true);
  });

  it('should accept matching passwords', () => {
    component.form.controls.password.setValue('Password@123');
    component.form.controls.confirmPassword.setValue('Password@123');

    expect(component.form.hasError('passwordMismatch')).toBe(false);
  });
});
