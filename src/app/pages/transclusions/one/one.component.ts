import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'abp-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {

  @Input()
  public header: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
