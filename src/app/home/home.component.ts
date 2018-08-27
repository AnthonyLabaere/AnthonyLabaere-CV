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
      state(HomeComponent.EXPERIENCES_CONTAINER_LIST_STATE, style({transform: 'translateX(0)'})),
      transition(HomeComponent.EXPERIENCES_CONTAINER_LIST_STATE + ' => ' + HomeComponent.EXPERIENCES_CONTAINER_ACCORDION_STATE, [
        style({transform: 'translateX(0)'}),
        animate('250ms ease-out')
      ]),
      state(HomeComponent.EXPERIENCES_CONTAINER_ACCORDION_STATE, style({transform: 'translateX(-150%)'})),
      transition(HomeComponent.EXPERIENCES_CONTAINER_ACCORDION_STATE + ' => ' + HomeComponent.EXPERIENCES_CONTAINER_LIST_STATE, [
        style({transform: 'translateX(-150%)'}),
        animate('250ms ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public static EXPERIENCES_CONTAINER_LIST_STATE = 'list';
  public static EXPERIENCES_CONTAINER_ACCORDION_STATE = 'accordion';

  private periodSeparator: string;

  public experiences: Experience[];
  public selectedExperience: Experience;
  public experiencesContainerState = HomeComponent.EXPERIENCES_CONTAINER_LIST_STATE;
  public isContextOpen = true;
  public isActivitiesOpen = false;
  public isEnvironmentOpen = false;

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
  
  onBackToExperiencesListClick() {
    this.experiencesContainerState = HomeComponent.EXPERIENCES_CONTAINER_LIST_STATE;
  }

  containerListAccordionAnimationDone(event: AnimationEvent) {
    if (event.toState === HomeComponent.EXPERIENCES_CONTAINER_LIST_STATE) {
      this.isContextOpen = true;
      this.isActivitiesOpen = false;
      this.isEnvironmentOpen = false;
    }
  }
}
