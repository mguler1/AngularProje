import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  constructor(
private templateRef:TemplateRef<any>,
private viewContainerRef:ViewContainerRef

  ) { }
  //selector ile aynı isimde olmalıdırç
@Input() set appCustomIf(value:boolean){
 if(value)
 {
  this.viewContainerRef.createEmbeddedView(this.templateRef)
 }
 else
 {
  this.viewContainerRef.clear();
 }
}
}
