export class Formation {
  logo: FormationLogo;
  startDate: Date;
  endDate: Date;
  place: string;
  description: string;

  constructor(logo: FormationLogo, startDate: Date, endDate: Date, place: string, description: string) {
    this.logo = logo;
    this.startDate = startDate;
    this.endDate = endDate;
    this.place = place;
    this.description = description;
  }

  public getPeriod(separator: string): string {
    return this.startDate.getFullYear() + separator + this.endDate.getFullYear();
  }
}
export class FormationLogo {
  fileName: string;
  description: string;

  constructor(fileName: string, description: string) {
    this.fileName = fileName;
    this.description = fileName;
  }
}

export class Experience {
  startDate: Date;
  endDate: Date;
  position: string;
  customer: string;
  context: string[];
  activities: Activity[];
  environment: Environment;

  constructor(startDate: Date, endDate: Date, position: string, customer: string,
              context: string[], activities: Activity[], environment: Environment) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.position = position;
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
  list: SubActivity[];

  constructor(type: ActivityType, list: SubActivity[]) {
    this.type = type;
    this.list = list;
  }
}

export class SubActivity {
  title: string;
  children: SubActivity[];

  constructor(title: string, children?: SubActivity[]) {
    this.title = title;
    this.children = children;
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

export class Skill {
  title: string;
  level: number; // 0 to 10
  theme: number;

  constructor(title: string, level: number, theme: number) {
    this.title = title;
    this.level = level;
    this.theme = theme;
  }
}
