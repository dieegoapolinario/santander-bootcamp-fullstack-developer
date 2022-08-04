import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Diego Apolinário';
  text = '';

  pessoas = [
    {
      nome: 'Diego',
      sobrenome: 'Apolinário',
    },
    {
      nome: 'Maria',
      sobrenome: 'Silva',
    },
    {
      nome: 'João',
      sobrenome: 'Pereira',
    },
    {
      nome: 'Marcio',
      sobrenome: 'Santos',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: string): void {
    console.log('Clicou!!!', nome);
  }
}
