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
      descricaoCurso: 'Aprenda a dominar testes no Angular com nosso curso de Jasmine e Karma. Explore técnicas avançadas de testes de unidade e integração para  garantir a qualidade do seu código. Torne-se um especialista em  desenvolvimento com testes automatizados!'
    });

    this.cards.push({
      imgSrc: '../../../../assets/img/react-logo.webp',
      nomeCurso: 'Curso React: aprofundando os conhecimentos em React',
      descricaoCurso: 'Explore o potencial do React em nosso curso especializado. Aprenda a  criar interfaces de usuário interativas e dinâmicas, dominando os  conceitos fundamentais e avançados desta poderosa biblioteca JavaScript.'
    })

    this.cards.push({
      imgSrc: '../../../../assets/img/nodejs_logo.png',
      nomeCurso: 'Curso Node.js: aprofundando conhecimento em Node.js',
      descricaoCurso: 'Mergulhe no mundo do desenvolvimento back-end com nosso curso de  Node.js. Aprenda a criar aplicativos escaláveis e eficientes usando JavaScript no servidor. Domine as habilidades necessárias para construir APIs.'
    })

    this.cards.push({
      imgSrc: '../../../../assets/img/uiux_logo.jpg',
      nomeCurso: 'Curso UI/UX: aprimorando o design de interface e a experiência do usuário',
      descricaoCurso: 'Explore a arte de criar experiências digitais excepcionais com nosso curso de UI/UX. Aprenda os princípios fundamentais do design de interfaces e da experiência do usuário para desenvolver produtos intuitivos e atraentes.'
    })
    this.cards.push({
      imgSrc: '../../../../assets/img/angular-logo.png',
      nomeCurso: 'PostgreSQL: aprendendo o básico para iniciar',
      descricaoCurso: 'Aprofunde seus conhecimentos em bancos de dados com nosso curso de  PostgreSQL. Explore desde conceitos básicos até técnicas avançadas de  modelagem e consultas SQL. Torne-se um especialista em gerenciamento de dados robusto e escalável!'
    })
    this.cards.push({
      imgSrc: '../../../../assets/img/react-logo.webp',
      nomeCurso: 'Curso React: aprofundando os conhecimentos em React',
      descricaoCurso: 'Explore o potencial do React em nosso curso especializado. Aprenda a  criar interfaces de usuário interativas e dinâmicas, dominando os  conceitos fundamentais e avançados desta poderosa biblioteca JavaScript.'
    })
    this.cards.push({
      imgSrc: '../../../../assets/img/nodejs_logo.png',
      nomeCurso: 'Curso Node.js: aprofundando conhecimento em Node.js',
      descricaoCurso: 'Mergulhe no mundo do desenvolvimento back-end com nosso curso de Node.js. Aprenda a criar aplicativos escaláveis e eficientes usando JavaScript no servidor. Domine as habilidades necessárias para construir APIs.'
    })
    
  }

}
