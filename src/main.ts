import 'zone.js/dist/zone';
import {
  AfterViewInit,
  Component,
  importProvidersFrom,
  NgModule,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './highlight.directive';
import { MainService } from './main.service';
import { ShortenPipe } from './shorten.pipe';
import { Child2Component } from './child2/child2.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ChildComponent,
    HighlightDirective,
    ShortenPipe,
    Child2Component,
    FormComponent,
    ReactiveFormsModule,
  ],
  // encapsulation: ViewEncapsulation.None,
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <p appHighlight>ViewEncapsulation</p>
    <p *ngFor="let footballer of footballersFromService">{{footballer | shorten:6}}</p>
    <hr/>
    {{dataFromChild}}
    <button (click)='firstChange()'>onChanges</button>
    <hr/>
    <app-child [parentData]='dataFromParent'
    (childData)=catchDataFromChild($event) #getWholeChild>
    <h4 #content>ng Content Example</h4>
    </app-child>
  `,
})
export class App implements AfterViewInit, OnInit {
  name = 'Angular';
  dataFromParent = 'Native - Bihar';
  footballersFromService = [];

  dataFromChild = '';

  @ViewChild('getWholeChild') childComponentAccess: ChildComponent;

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }
  constructor(private mainService: MainService) {}
  catchDataFromChild(event: string) {
    this.dataFromChild = event;
  }

  ngAfterViewInit() {
    console.log(this.childComponentAccess.name);
  }

  firstChange() {
    this.dataFromParent = 'Native - Umedpur';
    this.mainService.serviceMethodEmittingSubjectData(this.name);
  }

  ngOnInit() {
    console.log(this.mainService.DUMMY_DATA);
    this.mainService.footballers?.forEach((ce, ci, arr) => {
      this.footballersFromService.push(ce);
    });
    console.log(this.footballersFromService);
  }
}

bootstrapApplication(App, {
  providers: [MainService],
});
