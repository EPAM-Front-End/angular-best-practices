import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'abp-no-wrapper',
  templateUrl: './no-wrapper.component.html',
  styleUrls: ['./no-wrapper.component.scss'],
  host: {
    class: 'my-class',
  },
})
export class NoWrapperComponent implements OnInit {

  @HostBinding('class.host-bin-class')
  private bin = true;

  constructor() { }

  ngOnInit(): void {
  }

}
