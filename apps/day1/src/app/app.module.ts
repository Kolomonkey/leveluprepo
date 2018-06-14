import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppRoutingModule } from './app.routing.module';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@levelup/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { YoutubeListComponent } from './youtube/youtube-list/youtube-list.component';
import { YoutubeVideoComponent } from './youtube/youtube-video/youtube-video.component';
import { SafePipe } from '@levelup/safe.pipe';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubeComponent,
    YoutubeListComponent,
    YoutubeVideoComponent,
    SafePipe
  ],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
