import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MainService {
  DUMMY_DATA = [
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
  ];

  footballers = [
    'Cistiano Ronaldo',
    'Lionel Messi',
    'Neymar',
    'Mesut Ozil',
    'Sergio Ramos',
  ];

  constructor() {}

  serviceMethod() {
    console.log('Hello, I am a Service Method!');
  }

  subjectData = new Subject<string>();

  serviceMethodEmittingSubjectData(value: string) {
    this.subjectData.next(value);
  }
}
