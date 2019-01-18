import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { SidenavComponent } from './admin/dashboard/sidenav/sidenav.component';
import { MenutoolComponent } from './admin/dashboard/menutool/menutool.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { ProfileComponent } from './admin/dashboard/profile/profile.component';
import { LanguagesComponent } from './admin/dashboard/languages/languages.component';
import { ArticlesComponent } from './admin/dashboard/articles/articles.component';
import { StaticsComponent } from './admin/dashboard/statics/statics.component';
import { StatusComponent } from './admin/dashboard/status/status.component';
import { HttpModule } from '@angular/http';
import { DshComponent } from './admin/dashboard/dsh/dsh.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { WorksComponent } from './home/works/works.component';

const routes:Routes = [
  {path:'admin',children:[
    {path:'dashboard', component:DashboardComponent,children:[
      {path:'',component:DshComponent},
      {path:'profile',component:ProfileComponent},
      {path:'languages', component:LanguagesComponent},
      {path:'articles', component:ArticlesComponent},
      {path:'statics', component:StaticsComponent},
      {path:'status', component:StatusComponent}
    ]},
    {path:'',component:LoginComponent}
  ]},
  {path:'',component:WorksComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent}
  ]}
]
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MenutoolComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    LanguagesComponent,
    ArticlesComponent,
    StaticsComponent,
    StatusComponent,
    DshComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
