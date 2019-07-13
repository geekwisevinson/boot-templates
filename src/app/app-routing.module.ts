import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { Header1Component } from './header1/header1.component';
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';
import { Jumbotron1Component } from './jumbotrons/jumbotron1/jumbotron1.component';
import { Button1Component } from './buttons/button1/button1.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { Button2Component } from './buttons/button2/button2.component';
import { Button3Component } from './buttons/button3/button3.component';
import { Button4Component } from './buttons/button4/button4.component';
import { Button5Component } from './buttons/button5/button5.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { Dropdown1Component } from './dropdowns/dropdown1/dropdown1.component';
import { Dropdown2Component } from './dropdowns/dropdown2/dropdown2.component';

const routes: Routes = [
  {
    path: 'headers', component: HeadersComponent,
    children: [
      {path: 'header-1', component: Header1Component},
      {path: '**', redirectTo: 'header-1'},
    ]
  },
  {
    path: 'jumbotrons', component: JumbotronsComponent,
    children: [
      {path: 'jumbotron-1', component: Jumbotron1Component},
      {path: '**', redirectTo: 'jumbotron-1'},
    ]
  },
  {
    path: 'buttons', component: ButtonsComponent,
    children: [
      {path: 'button-1', component: Button1Component},
      {path: 'button-2', component: Button2Component},
      {path: 'button-3', component: Button3Component},
      {path: 'button-4', component: Button4Component},
      {path: 'button-5', component: Button5Component},
      {path: '**', redirectTo: 'button-1'},
    ]
  },
  {
    path: 'dropdowns', component: DropdownsComponent,
    children: [
      {path: 'dropdown-1', component: Dropdown1Component},
      {path: 'dropdown-2', component: Dropdown2Component},
      {path: '**', redirectTo: 'dropdown-1'},
    ]
  },
  {
    path: '**', redirectTo: 'headers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
