import {
  Injectable,
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  AfterViewInit,
  Type,
  NgModule,
  ComponentFactory,
  Compiler
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable()
export class PostContentResolverService {

  constructor( private compiler: Compiler) {}

  public createDynamicComponent(tmpl: string): Type<any> {
    @Component({
      template: tmpl
    })
    class InsertedComponent { }
    return InsertedComponent;
  }

  public createAdHocComponentFactory(component: any): ComponentFactory<any> {
    @NgModule({
      declarations: [component],
      entryComponents: [component],
      imports: [CommonModule],
    })
    class AdHocModule { }
    const factory = this.compiler.compileModuleAndAllComponentsSync(AdHocModule).componentFactories
      .find(fact => fact.componentType === component);
    return factory;
  }

}
