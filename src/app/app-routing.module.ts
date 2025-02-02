import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AppsComponent } from './apps/apps.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"skills",component:SkillsComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"work",component:WorkComponent,  children:[
    {path:"",component:GraphicComponent},
    {path:"graphic",component:GraphicComponent},
    {path:"apps",component:AppsComponent},
    {path:"software",component:SoftwareComponent}
  ]},
  {path:"**",component:NotFoundComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
