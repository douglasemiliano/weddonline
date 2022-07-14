import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { WeddingService } from 'src/app/services/wedding.service';

@Component({
  selector: 'app-wedding-form',
  templateUrl: './wedding-form.component.html',
  styleUrls: ['./wedding-form.component.scss']
})
export class WeddingFormComponent implements OnInit {

  public weddingForm: FormGroup;
  public groom: Person;
  public bride: Person;
  constructor(
    private fb: FormBuilder,
    private service: WeddingService,
    private router: Router) { }

  ngOnInit(): void {
    this.weddingForm = this.fb.group({
      'groom_name': new FormControl(''),
      'groom_cpf': new FormControl(''),
      'groom_bornDate': new FormControl(''),
      'groom_bornCity': new FormControl(''),
      'groom_nationality': new FormControl(''),
      'groom_mother': new FormControl(''),
      'groom_father': new FormControl(''),

      'bride_name': new FormControl(''),
      'bride_cpf': new FormControl(''),
      'bride_bornDate': new FormControl(''),
      'bride_bornCity': new FormControl(''),
      'bride_nationality': new FormControl(''),
      'bride_mother': new FormControl(''),
      'bride_father': new FormControl(''),

      'property_regime': new FormControl('')
    });
  }

  public onSubmit(): void {
    this.createGroomAndBride();
    console.log(this.service.createWedding(this.groom, this.bride, this.weddingForm.get("property_regime")?.value));
    this.router.navigate(['certificate']);

  }

  public createGroomAndBride(): void{

    this.groom = new Person(
      this.weddingForm.get("groom_name")!.value,
      this.weddingForm.get("groom_cpf")!.value,
      this.weddingForm.get("groom_bornDate")!.value,
      this.weddingForm.get("groom_bornCity")!.value,
      this.weddingForm.get("groom_nationality")!.value,
      this.weddingForm.get("groom_mother")!.value,
      this.weddingForm.get("groom_father")!.value)

    this.bride = new Person(
      this.weddingForm.get("bride_name")!.value,
      this.weddingForm.get("bride_cpf")!.value,
      this.weddingForm.get("bride_bornDate")!.value,
      this.weddingForm.get("bride_bornCity")!.value,
      this.weddingForm.get("bride_nationality")!.value,
      this.weddingForm.get("bride_mother")!.value,
      this.weddingForm.get("bride_father")!.value)

  }

}
