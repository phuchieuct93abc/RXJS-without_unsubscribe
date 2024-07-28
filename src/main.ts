import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { of, delay } from 'rxjs';
@Component({
  selector: 'app-child',
  standalone: true,
  template: `
   app child
  `,
})
export class AppChild implements OnInit {
  ngOnInit() {
    of('data')
      .pipe(delay(5000))
      .subscribe(() => console.log('DO some heavy task'));
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  template: ` 
    <button (click)="render()">Render</button>
   <div><app-child *ngIf="renderChild"></app-child></div>
  `,
  imports: [AppChild, CommonModule],
})
export class App {
  renderChild = true;
  render() {
    this.renderChild = !this.renderChild;
  }
}

bootstrapApplication(App);
