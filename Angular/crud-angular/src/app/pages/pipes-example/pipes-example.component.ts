import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'heLLo wORld!';
  date = new Date();
  people = { nome: 'Diego', idade: '31', profissao: 'Dev' };
  nomes = ['Diego', 'Ana', 'Maria'];

  constructor() {}

  ngOnInit(): void {}
  
  mudaValor(){
    this.number = 123456789;
  }

  add(text: string){
    this.nomes.push(text);
  }
}
