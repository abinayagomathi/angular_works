import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { FirstChildComponent } from './component/first-child/first-child.component';
import {SecondChildComponent} from './component/second-child/second-child.component';
import { ThirdChildComponent } from './component/third-child/third-child.component';
import { FourthChildComponent } from './component/fourth-child/fourth-child.component';
import { FifthChildComponent } from './component/fifth-child/fifth-child.component';
import { UserInputComponent } from './component/ioexample/userinput.component';
import { DetailComponent } from './component/ioexample/detail.component';
import { MenuPracticeComponent } from './menu-practice/menu-practice.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent,
    FourthChildComponent,
    FifthChildComponent,
    UserInputComponent,
    DetailComponent,
    MenuPracticeComponent,
    NgClassComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
