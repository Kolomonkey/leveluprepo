import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {}
