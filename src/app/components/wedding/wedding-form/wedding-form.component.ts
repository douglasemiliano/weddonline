import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { WeddingService } from 'src/app/services/wedding.service';

@Component({
  selector: 'app-wedding-form',
  templateUrl: './wedding-form.component.html',
  styleUrls: ['./wedding-form.component.scss']
})
export class WeddingFormComponent implements OnInit {

  public groomForm: FormGroup;
  public brideForm: FormGroup;
  public groom: Person;
  public bride: Person;
  public step: number;
  public property_regime: FormControl;

  constructor(
    private fb: FormBuilder,
    private service: WeddingService,
    private router: Router) { }

  ngOnInit(): void {
    this.step = 1;
    this.groomForm = this.createForm();
    this.brideForm = this.createForm();
    this.property_regime = new FormControl(2, Validators.required);
  }

  public createForm(): FormGroup{
    let form = this.fb.group({
      'name': new FormControl('', Validators.required),
      'cpf': new FormControl('', Validators.required),
      'bornDate': new FormControl('', Validators.required),
      'bornCity': new FormControl('', Validators.required),
      'nationality': new FormControl('', Validators.required),
      'mother': new FormControl('', Validators.required),
      'father': new FormControl('', Validators.required),
    });
    return form
  }

  public formIsValid(form: FormGroup): boolean{
    return form.valid? true: false
  }

  public onSubmit(): void {
    let groom = this.createGroomAndBride(this.groomForm);
    let bride = this.createGroomAndBride(this.brideForm);

    this.service.createWedding(groom, bride, this.property_regime?.value);
    this.router.navigate(['certificate']);

  }

  public createGroomAndBride(form: FormGroup): Person{
    return new Person(
      form.get("name")!.value,
      form.get("cpf")!.value,
      form.get("bornDate")!.value,
      form.get("bornCity")!.value,
      form.get("nationality")!.value,
      form.get("mother")!.value,
      form.get("father")!.value)
  }

  public next(): void {
    this.step += 1;

    switch(this.step){
      case 2 : document.getElementById("progress")!.style.width = "33.3%";
      break;
      case 3 : document.getElementById("progress")!.style.width = "66.6%";
      break;
      default : document.getElementById("progress")!.style.width = "100%";

    }
  }

}
