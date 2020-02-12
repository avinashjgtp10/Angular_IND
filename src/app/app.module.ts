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
import { ColorSampleComponent } from './component/color-sample/color-sample.component';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { from } from 'rxjs';
import { MessageComponent } from './component/message/message.component';
import { MessageContainComponent } from './component/message-contain/message-contain.component';
import { LifecycleContentParentComponent } from './component/lifecycle-content-parent/lifecycle-content-parent.component';

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
    LifecycleContentParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
