export class Experience {
  startDate: Date;
  endDate: Date;
  customer: string;
  context: string[];
  activities: Activity[];
  environment: Environment;

  constructor(startDate: Date, endDate: Date, customer: string, context: string[], activities: Activity[], environment: Environment) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.customer = customer;
    this.context = context;
    this.activities = activities;
    this.environment = environment;
  }

  public getPeriod(separator: string, monthFormatter: Intl.DateTimeFormat, capitalizeFirstLetter: Function): string {
    return capitalizeFirstLetter(monthFormatter.format(this.startDate)) + ' ' + this.startDate.getFullYear() +
      separator + capitalizeFirstLetter(monthFormatter.format(this.endDate)) + ' ' + this.endDate.getFullYear();
  }
}

export enum ActivityType {
  PROJECT_MANAGEMENT,
  DEVELOPMENT
}

export class Activity {
  type: ActivityType;
  list: string[];

  constructor(type: ActivityType, list: string[]) {
    this.type = type;
    this.list = list;
  }
}

export class Environment {
  ide: string;
  technologies: string[];
  versioning: string;

  constructor(ide: string, technologies: string[], versioning: string) {
    this.ide = ide;
    this.technologies = technologies;
    this.versioning = versioning;
  }
}


