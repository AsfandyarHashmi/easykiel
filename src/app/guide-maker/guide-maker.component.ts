import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-maker',
  templateUrl: './guide-maker.component.html',
  styleUrls: ['./guide-maker.component.css']
})
export class GuideMakerComponent implements OnInit {
  step_count = [1];

  constructor() { }

  ngOnInit() {
  }

  addStep() {
    this.step_count.push(this.step_count[this.step_count.length - 1] + 1);
  }

  clearSteps() {
    this.step_count = [];
    this.step_count = [1];
  }

}
