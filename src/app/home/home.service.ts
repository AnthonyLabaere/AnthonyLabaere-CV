import {Injectable} from '@angular/core';
import {Activity, ActivityType, Environment, Experience} from '../entities';

import * as moment from 'moment';

@Injectable()
export class HomeService {
  public getExperiences(): Experience[] {
    const experiences = [];

    experiences.push(
      new Experience(
        moment().set('date', 1).set('month', 4).set('year', 2012).toDate(),
        moment().set('date', 1).set('month', 11).set('year', 2012).toDate(),
        'Stagiaire Ingénieur Sopra Group en césure pour DGDDI',
        [
          'Intégration au sein d\'une équipe chez SOPRA GROUP.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [,
            'Développement/Qualification de corrections d’anomalies, de petites et moyennes évolutions ' +
              '(documentation technique, scripts, restitution Business Object).',
            'Développement d’une grande évolution pendant deux mois et demi en binôme ' +
              '(spécifications techniques, scripts shell et PLSQL, univers et rapports BO, documentation).'
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
        'Stagiaire Ingénieur Sopra Group en césure pour DGDDI',
        [
          'Intégration au sein d\'une équipe chez SOPRA GROUP.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [,
            'Développement de batchs, de webServices, d’IHM.'
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
        'Stagiaire Ingénieur LERO en césure',
        [
          'Réalisation, à 5 stagiaires, d’un démonstrateur de projets de recherche sous la forme d’un gestionnaire de trafic à Dublin.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [,
            'Développement de différentes fonctionnalités.'
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
        'Stagiaire Ingénieur EUROGICIEL',
        [
          'Gestion et maintenance d’une application de suivi de carrière des cadres dirigeants.',
          'Mission secondaire (moins un jour par mois).',
          'Travaux réalisés seul.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [,
            'Rédaction de documentations fonctionnelles et techniques.',
            'Développement back-end de patchs, jobs et web scripts.',
            'Développement front-end de pages, sites et templates.'
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
        'Ingénieur chez SOLENT SAS pour la FNCA',
        [
          'Gestion et maintenance d’une application de suivi de carrière des cadres dirigeants.',
          'Mission secondaire (moins un jour par mois).',
          'Travaux réalisés seul.'
        ],
        [
          new Activity(ActivityType.PROJECT_MANAGEMENT, [
            'Réalisation de chiffrages pour le développement des nouvelles applications ou évolutions sur les existantes.',
            'Gestion du suivi des tâches à réaliser sur les différentes applications.',
            'Maquettage des nouvelles applications ou des évolutions majeures à apporter sur les existantes.',
            'Gestion de la relation client et aide à la décision concernant l’expression du besoin.'
          ]),
          new Activity(ActivityType.DEVELOPMENT, [
            'Développement de corrections et d’évolutions.'
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
        'Ingénieur chez SOLENT SAS pour KENZO',
        [
          'Gestion d’un parc applicatif pour le client KENZO. Développement et maintenance d’applications web.',
          'Travaux réalisés seuls jusqu’à Août 2017, puis en équipe de 2 personnes. ' +
            'Mission principale : ~100 % jusqu’à Août 2017, puis 50%.'
        ],
        [
          new Activity(ActivityType.PROJECT_MANAGEMENT, [
            'Réalisation de développements front-end / back-end.',
            'Gestion du suivi des tâches à réaliser sur les différentes applications.',
            'Maquettage des nouvelles applications ou des évolutions majeures à apporter sur les existantes.',
            'Gestion de la relation client et aide à la décision concernant l’expression du besoin.',
            'Rédaction de documentations techniques et fonctionnelles (cartographie fonctionnelle, guide utilisateur, ' +
              'modèle physique de données, description des webservices, guide de déploiement, etc.).',
          ]),
          new Activity(ActivityType.DEVELOPMENT, [
            'Migration des technologies front-end Adobe Flex vers AngularJS des applications ' +
              'de gestion des commandes fournisseurs et du contrôle qualité.',
            'Migration des technologies back-end Java 6 / Spring 5 / Jetty vers Java 8 / Spring Boot (des deux mêmes applications).',
            'Développement « from scratch » d’applications web :',
            '  - De gestion de tables de correspondances entre les données de plusieurs applications (Java 8 / Spring Boot / AngularJS)',
            '  - D’exécution de jobs datastage via une interface simple d’utilisation (Java 8 / Spring Boot / AngularJS).',
            '  - De gestion des blocages sur les produits et les planches pendant showroom (Java 8 / Spring Boot / AngularJS).',
            '  - Backup d’une application externe de vente pendant showroom (Java 8 / Spring Boot / Angular 5).',
            '  - De gestion du planning des rendez-vous client / vendeur pendant showroom (Java 8 / Spring Boot / Angular 5).',
            '  - De saisie des fiches clients sur iPad (Java 8 / Spring Boot, Ionic v1).',
            'Évolutions et corrections diverses sur les nouvelles applications ou les existantes.',
            'Mise en place de tests unitaires.',
            'Déploiement..'
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
        'Ingénieur chez SOLENT SAS pour VULCAIN INGÉNIERIE',
        [
          'Réalisation d’une application de gestion des comptes rendus d’activités.',
          'Mission à 50% sur une équipe de 4 personnes, en méthodologie Agile (SCRUM).'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            'Réalisation de développements front-end / back-end.',
            'Relecture de code.'
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
        'Ingénieur chez SOLENT SAS',
        [
          'Réalisation, dans le cadre d’un challenge innovation, d’une tourelle robot permettant d’identifier des cibles et de les suivre.',
          'Équipe de 4 personnes (avec 20 jours sur l’année) plus 1 stagiaire en fin d’étude à plein temps sur le projet.'
        ],
        [
          new Activity(ActivityType.DEVELOPMENT, [
            'Réalisation d’un model TensorFlow de reconnaissance d’objet à partir d’un modèle pré-entraîné.',
            'Montage et programmation de la raspberry et de ses composants (caméra, servos moteurs).',
            'Réalisation d’un programme de tracking.'
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
}
