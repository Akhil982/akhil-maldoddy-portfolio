import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    backend:[
      {name:"Java, Spring Boot, Rest API",percent:90,remark:'excellent'},
      {name:"Microservices, API Gateway, Eureka",percent:90,remark:'excellent'},
      {name:"Security, JWT, OAuth2, Keycloak, Vault",percent:90,remark:'excellent'},
      {name:"Websocket, Redis, Mqtt, Kafka", percent:80,remark:'very-good'},
      {name:"PostgreSQL, MongoDB, MySQL, Neo4j",percent:80,remark:'very-good'}
    ],
    frontend:[
      {name:"Angular 11-18, Using js library in Angular",percent:90,remark:'excellent'},
      {name:"HTML, CSS, Javascript",percent:80,remark:'very-good'},
      {name:"Canvas, Vis.js, Three.js in Angular",percent:90,remark:'excellent'},
      {name:"Custom Directives, Pipes, Interceptor",percent:90,remark:'excellent'},
      {name:"Stomp.js, MatTree",percent:90,remark:'excellent'}
    ],
    devOps:[
      {name:"Docker and Kubernetes",percent:80,remark:'very-good'},
      {name:"Jenkins CI/CD, Pipeline Script",percent:70,remark:'good'},
      {name:"Linux Servers Manual Deployment",percent:80,remark:'very-good'},
      {name:"AWS",percent:50,remark:'average'},
      {name:"OpenShift Container Platform",percent:70,remark:'good'}
    ],
    aiMl:[
      {name:"Numpy, MatPlotLib, Pandas",percent:70,remark:'good'},
      {name:"Neural Networks - RNN, CNN, MNN",percent:80,remark:'very-good'},
      {name:"ML Algorithms"},
      {name:"ML Ops"}
    ],
    quantumComputing:[
      {name:"Qiskit - IBM",percent:50,remark:'average'}
    ]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




