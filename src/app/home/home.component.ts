import {Component, OnInit} from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';

import {HomeService} from './home.service';
import {Experience} from '../entities';
import {CommonService} from '../_services/common.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('containerListAccordion', [
      state('list', style({transform: 'translateX(0)'})),
      transition('list => accordion', [
        style({transform: 'translateX(0)'}),
        animate('250ms ease-out')
      ]),
      state('accordion', style({transform: 'translateX(-150%)'})),
      transition('accordion => list', [
        style({transform: 'translateX(-150%)'}),
        animate('250ms ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  private periodSeparator: string;

  public experiences: Experience[];
  public selectedExperience: Experience;
  public experiencesContainerState = 'list';

  constructor(private homeService: HomeService, private commonService: CommonService, private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.get('experiences.body.experiencePanel.period.separator').subscribe((res: string) => {
      this.periodSeparator = res;
    });

    this.experiences = this.homeService.getExperiences().sort((experience1, experience2) => {
      if (experience1.startDate > experience2.startDate) { return -1; }
      if (experience1.startDate < experience2.startDate) { return 1; }
      return 0;
    });
  }

  getExperiencePeriod(experience: Experience): string {
    return experience.getPeriod(this.periodSeparator);
  }
}
