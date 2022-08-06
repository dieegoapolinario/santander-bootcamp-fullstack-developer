import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  text = 'Diego';
  imageUrl = 'https://picsum.photos/100/100';
  imageUrl2 = 'https://picsum.photos/300/300';
  imageDesc = 'imagem aleatória';
  bgRed = 'red';
  textWhiteCenter = 'true';
  widthImg = 100;
  textInput = '';

  constructor() {}

  ngOnInit(): void {}

  retornaNome() {
    return this.text;
  }

  clicou() {
    this.text = 'Apolinario';
    console.log('clicou');
  }
  digitaNome(value: any) {
    console.log(this.digitaNome);
  }
}
