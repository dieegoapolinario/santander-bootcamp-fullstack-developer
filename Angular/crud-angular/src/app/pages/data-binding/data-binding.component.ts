import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  text = 'Diego';
  imageUrl = 'https://picsum.photos/100/100';
  imageDesc = 'imagem aleatória';

  constructor() {}

  ngOnInit(): void {}

  retornaNome() {
    return this.text;
  }

  clicou() {
    this.text = 'Apolinario';
    console.log('clicou');
  }
  digitaNome(value: any){
    console.log(this.digitaNome)
  }
}
