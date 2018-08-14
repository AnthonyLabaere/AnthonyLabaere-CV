import {Component, OnInit} from '@angular/core';

import {HomeService} from './home.service';
import {Experience} from '../entities';
import {CommonService} from '../_services/common.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private MONTH_FORMATTER: Intl.DateTimeFormat;
  private periodSeparator: string;

  public experiences: Experience[];


  constructor(private homeService: HomeService, private commonService: CommonService, private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.get('experiences.body.experiencePanel.period.separator').subscribe((res: string) => {
      this.periodSeparator = res;
    });

    this.MONTH_FORMATTER = this.commonService.getLongMonthFormatter();

    this.experiences = this.homeService.getExperiences();
  }

  getExperiencePeriod(experience: Experience): string {
    return experience.getPeriod(this.periodSeparator, this.MONTH_FORMATTER, this.commonService.capitalizeFirstLetter);
  }
}
