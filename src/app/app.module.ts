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
import { BgColorComponent } from './custom-directive/bgcolor.component';
import { MyBgColorDirective } from './custom-directive/bgcolor.directive';
import { NumericTest } from './custom-directive/numerictest.directive';
import { PhoneLength } from './custom-directive/phonelength.directive';
import { SelectBlur } from './custom-directive/selectblur.directive';
import { MultiSelect } from './multi-select/multi-select.component';
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
    NgstyleComponent,
    BgColorComponent,
    MyBgColorDirective,
    NumericTest,
    PhoneLength,
    SelectBlur,
    MultiSelect
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
