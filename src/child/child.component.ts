import { NgClass } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child2Component } from '../child2/child2.component';

import { MainService } from '../main.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  imports: [NgClass, FormsModule, Child2Component],
})
export class ChildComponent
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit,
    OnChanges,
    AfterViewChecked,
    AfterContentChecked
{
  @Input('parentData') dataFromParent: string = '';
  name = 'Aman Kumar';
  changeNameColor = false;
  inputValue = '';

  @Output('childData') dataFromChild = new EventEmitter<string>();
  constructor(private mainService: MainService) {
    console.log('constructor ran');
  }

  @ViewChild('propertyFromChild') normalTemplateAccess: ElementRef;

  @ContentChild('content') contentAsNgContent: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ran');
    console.log(changes);
  }

  ngOnInit() {
    // console.log(this.normalTemplateAccess.nativeElement);
    // console.log(this.contentAsNgContent.nativeElement);
    console.log('ngOnInit ran');
    console.log(this.mainService.DUMMY_DATA);
    this.mainService.serviceMethod();
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked ran');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit ran');

    console.log(this.normalTemplateAccess.nativeElement.innerHTML);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked ran');
  }

  ngAfterContentInit() {
    console.log('ngContentInit ran');

    console.log(this.contentAsNgContent.nativeElement.innerHTML);
  }

  dataToParent() {
    console.log(this.normalTemplateAccess.nativeElement);
    this.changeNameColor = true;
    this.dataFromChild.emit('Native - Bangalore');
    // this.dataFromParent = 'changed!';
  }
}
