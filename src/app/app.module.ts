import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';
import { MainComponent } from './component/main/main.component';
import { SectionComponent } from './component/section/section.component';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    MainComponent,
    SectionComponent,
    MyDirectiveDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
