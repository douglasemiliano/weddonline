import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCertificateComponent } from './template-certificate.component';

describe('TemplateCertificateComponent', () => {
  let component: TemplateCertificateComponent;
  let fixture: ComponentFixture<TemplateCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
