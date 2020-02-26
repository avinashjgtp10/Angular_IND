import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';
import { MainComponent } from './component/main/main.component';
import { SectionComponent } from './component/section/section.component';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ColorSampleComponent } from './component/color-sample/color-sample.component';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { from } from 'rxjs';
import { MessageComponent } from './component/message/message.component';
import { MessageContainComponent } from './component/message-contain/message-contain.component';
import { LifecycleContentParentComponent } from './component/lifecycle-content-parent/lifecycle-content-parent.component';
import { ObservableExampleComponent } from './component/observable-example/observable-example.component';
import { SubjectComponent } from './component/subject/subject.component';
import { TempleteFormComponent } from './component/templete-form/templete-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    MainComponent,
    SectionComponent,
    MyDirectiveDirective,
    ParentComponent,
    ChildComponent,
    ColorSampleComponent,
    MessageComponent,
    MessageContainComponent,
    LifecycleContentParentComponent,
    ObservableExampleComponent,
    SubjectComponent,
    TempleteFormComponent,
    ReactiveFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
