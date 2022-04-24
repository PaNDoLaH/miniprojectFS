import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { PetitionComponent } from './component/petition/petition.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { CourseComponent } from './component/course/course.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'petition', component: PetitionComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'course', component: CourseComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
