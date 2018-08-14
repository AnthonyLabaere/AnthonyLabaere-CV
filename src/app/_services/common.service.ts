import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class CommonService {

  constructor(private translateService: TranslateService) {}

  public capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  public getLongMonthFormatter(): Intl.DateTimeFormat {
    return new Intl.DateTimeFormat('fr', { month: 'long' });
  }
}
