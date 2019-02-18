import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxY2PlayerModule } from 'ngx-y2-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BiographyComponent } from './biography/biography.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { InstagramPostComponent } from './instagram-feed/instagram-post/instagram-post.component';
import { VideosComponent } from './videos/videos.component';
import { ImageFeedComponent } from './image-feed/image-feed.component';

import { LocaldataService } from './services/localdata/localdata.service';
import { MusicComponent } from './music/music.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BiographyComponent,
    InstagramFeedComponent,
    InstagramPostComponent,
    VideosComponent,
    ImageFeedComponent,
    MusicComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxPageScrollCoreModule,
    NgxY2PlayerModule,
    AppRoutingModule
  ],
  entryComponents: [
    InstagramPostComponent,
    NavigationMenuComponent
  ],
  providers: [
    LocaldataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
