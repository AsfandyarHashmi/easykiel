import { Component, OnInit } from '@angular/core';
import { Guide } from '../models/Guide';
import { Step } from '../models/Step';
import { GuideService } from '../services/guide.service';

@Component({
  selector: 'app-guide-maker',
  templateUrl: './guide-maker.component.html',
  styleUrls: ['./guide-maker.component.css']
})
export class GuideMakerComponent implements OnInit {
  guide: Guide;
  steps: Step[];
  newStep: Step;
  count = 0;
  makingstep = false;

  constructor(private guideService: GuideService) {
    this.guide = new Guide();
    this.steps = [];
   }

  ngOnInit() {
  }

  addStep() {
    this.count = this.steps.length + 1;
    this.makingstep = true;
    this.newStep = new Step();
  }

  confirmStep() {
    this.steps.push(this.newStep);
    this.makingstep = false;
    this.newStep = new Step();
    this.count = this.steps.length;
  }

  cancelStep() {
    this.makingstep = false;
    this.count = this.steps.length;
  }

  clearSteps() {
    this.steps = [];
  }

  submit() {
    this.guide.steps = JSON.stringify(this.steps);
    this.guideService.create(this.guide).subscribe(res => {
      
    });
  }
}
