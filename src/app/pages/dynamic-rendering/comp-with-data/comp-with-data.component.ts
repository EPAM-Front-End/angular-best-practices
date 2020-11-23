import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';


export interface ICompData {
  id: number;
}

export const COMP_DATA = new InjectionToken<ICompData>('comp_data');

@Component({
  selector: 'abp-comp-with-data',
  templateUrl: './comp-with-data.component.html',
  styleUrls: ['./comp-with-data.component.scss'],
})
export class CompWithDataComponent implements OnInit {

  // constructor(@Inject(COMP_DATA) public data?: ICompData) { } // Without @Optional this will throw error
  constructor(@Optional() @Inject(COMP_DATA) public data?: ICompData) { } // @Optional allows data to not be inject

  ngOnInit(): void {
  }

}
