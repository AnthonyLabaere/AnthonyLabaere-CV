import {Injectable} from '@angular/core';
import {Activity, ActivityType, Environment, Experience, SubActivity, Formation, Image, Skill, Leisure} from '../entities';

import * as moment from 'moment';

@Injectable()
export class HomeService {

  private static SKILL_JAVA_THEME = 1;
  private static SKILL_JS_THEME = 2;
  private static SKILL_WEB_THEME = 3;
  private static SKILL_NEURAL_NETWORK_THEME = 4;
  private static SKILL_DB_THEME = 5;
  private static SKILL_VERSIONING_THEME = 6;
  private static SKILL_IDE_THEME = 7;
  private static SKILL_MODELING_THEME = 8;
  private static SKILL_PROJECT_MANAGEMENT_THEME = 9;

  public getFormations(): Formation[] {
    const formations: Formation[] = [];

    formations.push(new Formation(
      new Image('faidherbe_logo.gif', 'Faidherbe logo'),
      moment().set('date', 1).set('month', 0).set('year', 2008).toDate(),
      moment().set('date', 1).set('month', 0).set('year', 2010).toDate(),
      'Lycée Faidherbe',
      'CPGE (Classe Préparatoire aux Grandes Écoles) : MPSI et MP*'
    ));
    formations.push(new Formation(
      new Image('ecn_logo.png', 'ECN logo'),
      moment().set('date', 1).set('month', 0).set('year', 2010).toDate(),
      moment().set('date', 1).set('month', 0).set('year', 2014).toDate(),
      'École Centrale Nantes',
      'Ingénieur Généraliste avec spécialité informatique'
    ));

    return formations;
  }

  public getExperiences(): Experience[] {
    const experiences: Experience[] = [];

    experiences.push(
      new Experience(
        moment().set('date', 1).set('month', 4).set('year', 2012).toDate(),
        moment().set('date', 1).set('month', 11).set('year', 2012).toDate(),
        'Stagiaire en césure chez SOPRA GROUP',
        'CNAMTS',
        [
          'Intégration au sein d\'une équipe.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Développement/Qualification de corrections d’anomalies, de petites et moyennes évolutions ' +
              '(documentation technique, scripts, restitution Business Object).'),
              new SubActivity('Développement d’une grande évolution pendant deux mois et demi en binôme ' +
              '(spécifications techniques, scripts shell et PLSQL, univers et rapports BO, documentation).')
          ])
        ],
        new Environment(
          null,
          ['KornShell', 'PLSQL', 'Business Object'],
          'SVN'
        )
      ),
      new Experience(
        moment().set('date', 1).set('month', 0).set('year', 2013).toDate(),
        moment().set('date', 1).set('month', 3).set('year', 2013).toDate(),
        'Stagiaire en césure chez SOPRA GROUP',
        'DGDDI',
        [
          'Intégration au sein d\'une équipe.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Développement de batchs, de webServices, d’IHM.')
          ])
        ],
        new Environment(
          'Eclipse',
          ['JavaEE', 'Struts 2', 'Spring'],
          'SVN'
        )
      ),
      new Experience(
        moment().set('date', 1).set('month', 4).set('year', 2013).toDate(),
        moment().set('date', 1).set('month', 7).set('year', 2013).toDate(),
        'Stagiaire en césure au LERO à Dublin',
        'LERO',
        [
          'Réalisation, à 5 stagiaires, d’un démonstrateur de projets de recherche sous la forme d’un gestionnaire de trafic à Dublin.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Développement de différentes fonctionnalités.')
          ])
        ],
        new Environment(
          'Eclipse',
          ['Mule ESB', 'Java', 'JavasScript'],
          'Git'
        )
      ),
      new Experience(
        moment().set('date', 1).set('month', 3).set('year', 2014).toDate(),
        moment().set('date', 1).set('month', 8).set('year', 2014).toDate(),
        'Stagiaire chez EUROGICIEL.',
        'EUROGICIEL',
        [
          'Gestion et maintenance d’une application de suivi de carrière des cadres dirigeants.',
          'Mission secondaire (moins un jour par mois).',
          'Travaux réalisés seul.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Rédaction de documentations fonctionnelles et techniques.'),
            new SubActivity('Développement back-end de patchs, jobs et web scripts.'),
            new SubActivity('Développement front-end de pages, sites et templates.')
          ])
        ],
        new Environment(
          'Eclipse',
          ['Alfresco 4.2f Community', 'Java', 'JavasScript', 'MySQL', 'Tomcat', 'Maven'],
          'Git'
        )
      ),
      new Experience(
        moment().set('date', 1).set('month', 10).set('year', 2014).toDate(),
        moment().set('date', 1).set('month', 10).set('year', 2016).toDate(),
        'Ingénieur chez SOLENT',
        'FNCA',
        [
          'Gestion et maintenance d’une application de suivi de carrière des cadres dirigeants.',
          'Mission secondaire (moins un jour par mois).',
          'Travaux réalisés seul.'
        ],
        [
          new Activity(ActivityType.PROJECT_MANAGEMENT, [
            new SubActivity('Réalisation de chiffrages pour le développement des nouvelles applications ou évolutions sur les existantes.'),
            new SubActivity('Gestion du suivi des tâches à réaliser sur les différentes applications.'),
            new SubActivity('Maquettage des nouvelles applications ou des évolutions majeures à apporter sur les existantes.'),
            new SubActivity('Gestion de la relation client et aide à la décision concernant l’expression du besoin.')
          ]),
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Développement de corrections et d’évolutions.')
          ])
        ],
        new Environment(
          'Eclipse Luna',
          ['Java 7', 'Spring', 'JSF 1.2 et 2.2.', 'Hibernate', 'Maven'],
          'SVN'
        )
      ),
      new Experience(
        moment().set('date', 1).set('month', 1).set('year', 2015).toDate(),
        moment().set('date', 1).set('month', 7).set('year', 2018).toDate(),
        'Ingénieur chez SOLENT',
        'KENZO',
        [
          'Gestion d’un parc applicatif pour le client KENZO.',
          'Développement et maintenance d’applications web.',
          'Travaux réalisés seuls jusqu’à Août 2017, puis en équipe de 2 personnes.',
          'Mission principale : ~100 % jusqu’à Août 2017, puis 50%.'
        ],
        [
          new Activity(ActivityType.PROJECT_MANAGEMENT, [
            new SubActivity('Réalisation de développements front-end / back-end.'),
            new SubActivity('Gestion du suivi des tâches à réaliser sur les différentes applications.'),
            new SubActivity('Maquettage des nouvelles applications ou des évolutions majeures à apporter sur les existantes.'),
            new SubActivity('Gestion de la relation client et aide à la décision concernant l’expression du besoin.'),
            new SubActivity('Rédaction de documentations techniques et fonctionnelles (cartographie fonctionnelle, guide utilisateur, ' +
              'modèle physique de données, description des webservices, guide de déploiement, etc.).'),
          ]),
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Migration des technologies front-end Adobe Flex vers AngularJS des applications ' +
              'de gestion des commandes fournisseurs et du contrôle qualité.'),
              new SubActivity('Migration des technologies back-end Java 6 / Spring 5 / Jetty vers Java 8 / Spring Boot (des deux mêmes applications).'),
              new SubActivity('Développement « from scratch » d’applications web :', [
                new SubActivity('De gestion de tables de correspondances entre les données de plusieurs applications (Java 8 / Spring Boot / AngularJS)'),
                new SubActivity('D’exécution de jobs datastage via une interface simple d’utilisation (Java 8 / Spring Boot / AngularJS).'),
                new SubActivity('De gestion des blocages sur les produits et les planches pendant showroom (Java 8 / Spring Boot / AngularJS).'),
                new SubActivity('Backup d’une application externe de vente pendant showroom (Java 8 / Spring Boot / Angular 5).'),
                new SubActivity('De gestion du planning des rendez-vous client / vendeur pendant showroom (Java 8 / Spring Boot / Angular 5).'),
                new SubActivity('De saisie des fiches clients sur iPad (Java 8 / Spring Boot, Ionic v1).')
              ]),
            new SubActivity('Évolutions et corrections diverses sur les nouvelles applications ou les existantes.'),
            new SubActivity('Mise en place de tests unitaires.'),
            new SubActivity('Déploiement.')
          ])
        ],
        new Environment(
          'IntelliJ',
          ['Java 1.8', 'Spring Boot 1.4.2', 'Hibernate 4.3.11', 'JUnit 4.11', 'SQL Server 2014', 'Maven 3.3.9', 'NodeJS 6.10.1',
            'Yarn 1.3.2', 'Angular 1.5.5 / Bootstrap 3.3.6 / Ionic 1.3.2', 'Angular 5.0.0 / Bootstrap 4.0.0 / Ionic 3'],
          'SVN & Git'
        )
      ),
      new Experience(
        moment().set('date', 1).set('month', 7).set('year', 2017).toDate(),
        moment().set('date', 1).set('month', 7).set('year', 2018).toDate(),
        'Ingénieur chez SOLENT',
        'VULCAIN',
        [
          'Réalisation d’une application de gestion des comptes rendus d’activités.',
          'Mission à 50% sur une équipe de 4 personnes, en méthodologie Agile (SCRUM).'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Réalisation de développements front-end / back-end.'),
            new SubActivity('Relecture de code.')
          ])
        ],
        new Environment(
          'IntelliJ',
          ['NodeJS', 'Yarn', 'LoopBack', 'React', 'MongoDB'],
          'Git'
        )
      )
    );
    experiences.push(
      new Experience(
        moment().set('date', 1).set('month', 0).set('year', 2018).toDate(),
        moment().set('date', 1).set('month', 7).set('year', 2018).toDate(),
        'Ingénieur chez SOLENT',
        'SOLENT',
        [
          'Réalisation, dans le cadre d’un challenge innovation, d’une tourelle robot permettant d’identifier des cibles et de les suivre.',
          'Équipe de 4 personnes (avec 20 jours sur l’année) plus 1 stagiaire en fin d’étude à plein temps sur le projet.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            new SubActivity('Réalisation d’un model TensorFlow de reconnaissance d’objet à partir d’un modèle pré-entraîné.'),
            new SubActivity('Montage et programmation de la raspberry et de ses composants (caméra, servos moteurs).'),
            new SubActivity('Réalisation d’un programme de tracking.')
          ])
        ],
        new Environment(
          'IntelliJ',
          ['TensorFlow', 'Raspberry', 'Python 2 et 3.'],
          'Git'
        )
      )
    );

    return experiences;
  }

  public getSkills(): Skill[] {
    let skills: Skill[] = [];

    skills.push(
      new Skill('Java', 8, HomeService.SKILL_JAVA_THEME),
      new Skill('Spring', 7, HomeService.SKILL_JAVA_THEME),
      new Skill('Spring Boot', 7, HomeService.SKILL_JAVA_THEME),
      new Skill('Hibernate', 8, HomeService.SKILL_JAVA_THEME),
      new Skill('Maven', 6, HomeService.SKILL_JAVA_THEME),
      new Skill('Javascript', 8, HomeService.SKILL_JS_THEME),
      new Skill('NodeJS', 4, HomeService.SKILL_JS_THEME),
      new Skill('AngularJS', 8, HomeService.SKILL_JS_THEME),
      new Skill('Angular', 8, HomeService.SKILL_JS_THEME),
      new Skill('Ionic', 6, HomeService.SKILL_JS_THEME),
      new Skill('Loopback', 5, HomeService.SKILL_JS_THEME),
      new Skill('ReactJS', 6, HomeService.SKILL_JS_THEME),
      new Skill('HTML - CSS', 9, HomeService.SKILL_WEB_THEME),
      new Skill('SASS', 7, HomeService.SKILL_WEB_THEME),
      new Skill('Python', 3, HomeService.SKILL_NEURAL_NETWORK_THEME),
      new Skill('TensorFlow', 2, HomeService.SKILL_NEURAL_NETWORK_THEME),
      new Skill('SQL Server', 7, HomeService.SKILL_DB_THEME),
      new Skill('MySQL', 5, HomeService.SKILL_DB_THEME),
      new Skill('MongoDB', 4, HomeService.SKILL_DB_THEME),
      new Skill('SVN', 7, HomeService.SKILL_VERSIONING_THEME),
      new Skill('Git', 8, HomeService.SKILL_VERSIONING_THEME),
      new Skill('IntelliJ', 9, HomeService.SKILL_IDE_THEME),
      new Skill('Eclipse', 6, HomeService.SKILL_IDE_THEME),
      new Skill('Visual Code', 3, HomeService.SKILL_IDE_THEME),
      new Skill('Axure', 1, HomeService.SKILL_MODELING_THEME),
      new Skill('Agile', 7, HomeService.SKILL_PROJECT_MANAGEMENT_THEME)
    );

    return skills;
  }

  public getLeisures(): Leisure[] {
    let leisures: Leisure[] = [];

    leisures.push(
      new Leisure(new Image('diy.jpg', 'Bricolage'), 'Bricolage'),
      new Leisure(new Image('gardening.jpg', 'Jardinage'), 'Jardinage'),
      new Leisure(new Image('emerging-technologies.jpg', 'Nouvelles technologies'), 'Nouvelles technologies')
    );

    return leisures;
  }

}
