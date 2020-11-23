import { Component, OnInit } from '@angular/core';
import { CompComponent } from './comp';
import { CompWithDataComponent } from './comp-with-data';


@Component({
  selector: 'abp-dynamic-rendering',
  templateUrl: './dynamic-rendering.component.html',
  styleUrls: ['./dynamic-rendering.component.scss'],
})
export class DynamicRenderingComponent implements OnInit {

  public config = [
    CompComponent,
    CompComponent,
    CompComponent,
    CompWithDataComponent,
    CompWithDataComponent,
    CompWithDataComponent,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
