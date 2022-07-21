import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeddingComponent } from './wedding/wedding.component';
import { WeddingFormComponent } from './wedding/wedding-form/wedding-form.component';
import { WeddingService } from '../services/wedding.service';
import { TemplateCertificateComponent } from './pages/template-certificate/template-certificate.component';
import { NgxPdfModule } from '@michaelldev/ngx-pdf';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WeddingComponent, WeddingFormComponent, TemplateCertificateComponent, HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPdfModule,
    RouterModule
  ],
  exports: [
    WeddingComponent,
    WeddingFormComponent
  ],
  providers: [
    WeddingService
  ]
})
export class SharedModule { }
