import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ParentComponent } from './components/parenttoChildComminication/parent/parent.component';
import { ChildComponent } from './components/parenttoChildComminication/child/child.component';
import { ChildComponent as ChildComponent2 } from './components/ChildToParentComminication/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/ChildToParentComminication/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    CustomIfDirective,
    CustomPipe,
    ParentComponent,
    ChildComponent,
    ChildComponent2,
    ParentComponent2

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide:DEFAULT_CURRENCY_CODE,useValue:'₺'},CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
