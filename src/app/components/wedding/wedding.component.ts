import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { Wedding } from 'src/app/models/wedding';
import { WeddingService } from 'src/app/services/wedding.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {

  husbandText: string;
  wifeText: string;
  public groom: Person;
  public bride: Person;
  public wedding: Wedding;
  public matricula: any;

  public weddingForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: WeddingService) { }

  ngOnInit(): void {
    this.matricula = Date.now();
    console.log(
    this.service.getWedding());
    this.wedding = this.service.getWedding();
  }

  public onSubmit(): void {
  }

}
