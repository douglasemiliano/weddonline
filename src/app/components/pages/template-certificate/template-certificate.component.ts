import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { Wedding } from 'src/app/models/wedding';
import { WeddingService } from 'src/app/services/wedding.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-template-certificate',
  templateUrl: './template-certificate.component.html',
  styleUrls: ['./template-certificate.component.scss']
})
export class TemplateCertificateComponent implements OnInit {

  @Input() groom: Person;
  @Input() bride: Person;
  @Input() wedding: Wedding;


  public husbandText: string;
  public wifeText: string;
  public matricula: any;

  public weddingForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: WeddingService,
    private router: Router) { }

  ngOnInit(): void {
    this.matricula = Date.now();
    this.getTextArea();
  }

  public onSubmit(): void {
    console.log(this.groom);
    console.log(this.bride);
  }

  public goToForm(): void{
    this.router.navigate([''])
  }

  public getTextArea():void {
    this.husbandText = "nascido no dia " + this.wedding.getGroom().bornDate + ", natural de " + this.wedding.getGroom().bornCity + " de nacionalidade: "
    + this.wedding.getGroom().nationality + ", filho de " + this.wedding.getGroom().mother + " e " + this.wedding.getGroom().father + ".";

    this.wifeText = "nascida no dia " + this.wedding.getBride().bornDate + ", natural de " + this.wedding.getBride().bornCity + " de nacionalidade: "
    + this.wedding.getBride().nationality + ", filha de " + this.wedding.getBride().mother + " e " + this.wedding.getBride().father + ".";

  }

  public exportAsPDF(div: any) {
    let data = document.getElementById(div);

    var doc = new jspdf.jsPDF('p', 'pt', 'a3');

    doc.html(data!, {
      callback: function (doc) {
        doc.save();
      },
      x: 10,
      y: 10,
   });
  }




}
