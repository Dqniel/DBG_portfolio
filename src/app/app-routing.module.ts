import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './components/base/base.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {JimMobileComponent} from './components/jim-mobile/jim-mobile.component';
import {SopraComponent} from './components/sopra/sopra.component';
import {StarterComponent} from './components/starter/starter.component';
import {TechasiaComponent} from './components/techasia/techasia.component';
import {OldPortfolioComponent} from './components/old-portfolio/old-portfolio.component';
import {HomeComponent} from './components/home/home.component';
import {WorkPageComponent} from './components/work-page/work-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent},
  { path: 'base', component: BaseComponent},
  { path: 'jim', component: JimMobileComponent},
  { path: 'sopra', component: SopraComponent},
  { path: 'starter', component: StarterComponent},
  { path: 'techasia', component: TechasiaComponent},
  { path: 'old-portfolio', component: OldPortfolioComponent},
  { path: 'WorkPageComponent', component: WorkPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
export const routingComponents = [
  HomeComponent,
  AboutMeComponent,
  BaseComponent,
  JimMobileComponent,
  SopraComponent,
  StarterComponent,
  TechasiaComponent,
  OldPortfolioComponent
];
*/
