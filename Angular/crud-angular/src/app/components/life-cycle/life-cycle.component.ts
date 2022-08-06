import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  @Input() number = 10;
  
  constructor() {
    console.log('Chamou o construtor');
  }

  ngOnChanges(): void {
    console.log('Chamou OnChanges');
  }

  ngOnInit(): void {
    console.log('Chamou OnInit');
  }

  ngDoCheck(): void {
    console.log('Chamou DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Chamou AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Chamou AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Chamou AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Chamou AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Chamou OnDestroy');
  }
}
