import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-wedding';
  enter: boolean;
  public activatedRouter: string;

  constructor(
    private router: Router){
}

ngOnInit(): void {
  console.log(this.router.url);
  }

  onSubmit():void {
    this.enter = true;
  }
}
