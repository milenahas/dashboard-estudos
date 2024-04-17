import { Component, OnInit } from '@angular/core';
import { Cards } from '../../shared/cards';

@Component({
  selector: 'app-proximos-cursos',
  templateUrl: './proximos-cursos.component.html',
  styleUrls: ['./proximos-cursos.component.css']
})
export class ProximosCursosComponent implements OnInit {

  cards: Cards[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'Curso Angular: testes automatizados com Jasmine e Karma',
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e  Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código.'
    });

    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'Curso Angular: testes automatizados com Jasmine e Karma',
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e  Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código.'
    })

    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'Curso Angular: testes automatizados com Jasmine e Karma',
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e  Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código.'
    })

    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'Curso Angular: testes automatizados com Jasmine e Karma',
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e  Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código.'
    })
    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'Curso Angular: testes automatizados com Jasmine e Karma',
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e  Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código.'
    })
    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'Curso Angular: testes automatizados com Jasmine e Karma',
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e  Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código.'
    })
    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'Curso Angular: testes automatizados com Jasmine e Karma',
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e  Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código.'
    })
    
  }

}
