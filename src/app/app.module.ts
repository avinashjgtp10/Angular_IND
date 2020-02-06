import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';
import { MainComponent } from './component/main/main.component';
import { SectionComponent } from './component/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    MainComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
