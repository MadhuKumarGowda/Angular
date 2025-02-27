import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  statusList: string[] = [];

  constructor() {
    this.statusList.push('Constructor being Called');
  }

  ngOnInit(): void {
    this.statusList.push('OnInit being Called');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit being Called');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewContent being Called');
  }

  ngAfterContentInit(): void {
    this.statusList.push('AfterContentInit being Called');
  }

  ngAfterContentChecked(): void {
    this.statusList.push('AfterContentChecked being Called');
  }

  ngOnDestroy(): void {
    this.statusList.push('Destroy being Called');
  }
}
