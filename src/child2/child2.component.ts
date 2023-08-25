import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { FormComponent } from '../form/form.component';
import { MainService } from '../main.service';

@Component({
  standalone: true,
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  imports: [FormComponent],
})
export class Child2Component implements OnInit {
  subjectData = '';
  constructor(private mainService: MainService) {}

  ngOnInit() {
    // this.subjectData=this.mainService.subjectData
    this.mainService.subjectData.subscribe((data) => {
      console.log(data);
      this.subjectData = data;
    });

    const promise = new Promise((resolve, reject) => {
      console.log('promise envoked');
      let count = 5;
      setTimeout(() => {
        if (count < 6) {
          resolve('Working promise, no Error!');
          resolve('Working promise, no Error2!');
          resolve('Working promise, no Error3!');
          resolve('Working promise, no Error4!');
          resolve('Working promise, no Error5!');
        } else {
          reject('Error Found');
        }
      }, 2000);
    });

    const behaviorSubject = new BehaviorSubject(30);
    // behaviorSubject.next(45);

    behaviorSubject.subscribe((data) => {
      console.log(data);
    });

    const observable = new Observable((subscribableData) => {
      console.log('observable envoked');
      setTimeout(() => {
        subscribableData.next('Observable data stream');
        subscribableData.next('Observable data stream1');
        subscribableData.next('Observable data stream2');
        subscribableData.next('Observable data stream3');
        subscribableData.next('Observable data stream4');
      }, 2000);
    });

    promise.then((data) => console.log(data));
    observable.subscribe((data) => {
      console.log(data);
    });
  }
}
