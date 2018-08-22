export class Experience {
  startDate: Date;
  endDate: Date;
  summary: string;
  customer: string;
  context: string[];
  activities: Activity[];
  environment: Environment;

  constructor(startDate: Date, endDate: Date, summary: string, customer: string,
              context: string[], activities: Activity[], environment: Environment) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.summary = summary;
    this.customer = customer;
    this.context = context;
    this.activities = activities;
    this.environment = environment;
  }

  public getPeriod(separator: string): string {
    return ((this.startDate.getMonth() + 1) < 10 ? '0' : '') + (this.startDate.getMonth() + 1) + '/' + this.startDate.getFullYear() +
      separator + ((this.endDate.getMonth() + 1) < 10 ? '0' : '') + (this.endDate.getMonth() + 1) + '/' + this.endDate.getFullYear();
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


