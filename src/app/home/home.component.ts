import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }
  ngOnInit(): void {
    var serverSideOptions = {
      strings: ['Spring Boot', 'Microservices', 'Security', 'Rest API'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    var clientSideOptions = {
      strings: ['Angular', 'JavaScript', 'HTML', 'CSS'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    var devOpsOptions = {
      strings: ['Manual Linux', 'Jenkins', 'Docker', 'Kubernetes', 'AWS'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    var aiMlOptions = {
      strings: ['Numpy', 'MatPlotLib', 'Pandas', 'Neural Networks'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    var quantumComputingOptions = {
      strings: ['Qiskit'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    var serverSide = new Typed('.serverSide', serverSideOptions);
    serverSide.reset(true)
    var clientSide = new Typed('.clientSide', clientSideOptions);
    clientSide.reset(true)
    var devOps = new Typed('.devOps', devOpsOptions);
    devOps.reset(true)
    var aiMl = new Typed('.aiMl', aiMlOptions);
    aiMl.reset(true)
    var quantumComputing = new Typed('.quantumComputing', quantumComputingOptions);
    quantumComputing.reset(true)
  }
}
