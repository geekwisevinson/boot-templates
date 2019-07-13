import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Button1Component } from './buttons/button1/button1.component';
import { Button3Component } from './buttons/button3/button3.component';
import { Button4Component } from './buttons/button4/button4.component';
import { Header1Component } from './header1/header1.component';
import { Jumbotron1Component } from './jumbotrons/jumbotron1/jumbotron1.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { Button2Component } from './buttons/button2/button2.component';
import { Button5Component } from './buttons/button5/button5.component';
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeadersComponent } from './headers/headers.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { Dropdown1Component } from './dropdowns/dropdown1/dropdown1.component';
import { Dropdown2Component } from './dropdowns/dropdown2/dropdown2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    Header1Component,
    JumbotronsComponent,
    Jumbotron1Component,
    ButtonsComponent,
    Button1Component,
    Button2Component,
    Button3Component,
    Button4Component,
    Button5Component,
    DropdownDirective,
    DropdownsComponent,
    Dropdown1Component,
    Dropdown2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
