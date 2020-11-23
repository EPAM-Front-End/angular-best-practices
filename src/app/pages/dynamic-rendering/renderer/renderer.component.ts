import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { COMP_DATA, ICompData } from '../comp-with-data';


@Component({
  selector: 'abp-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements AfterViewInit {

  @Input()
  public config: Type<any>[] = [];

  @ViewChild('host', { read: ViewContainerRef })
  // @ts-ignore
  public host: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.render();
  }

  public render(): void {
    this.host.clear(); // Clear any previously rendered elements
    this.config.forEach((component, index) => {
      this.renderSingleElement(component);
      // this.renderSingleElementWithData(component, index);
    });
    this.cdRef.detectChanges();
  }

  public renderSingleElement(component: Type<any>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.host.createComponent(componentFactory); // This creates component as sibling to the host element
  }

  public renderSingleElementWithData(component: Type<any>, id: number): void {
    const injector = Injector.create({
      providers: [
        { provide: COMP_DATA, useValue: { id } as ICompData },
      ],
      name: 'dynamic injector',
    });
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.host.createComponent(componentFactory, undefined, injector); // This creates component as sibling to the host element
  }

}
