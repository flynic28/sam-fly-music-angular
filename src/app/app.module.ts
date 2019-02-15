import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxY2PlayerModule } from 'ngx-y2-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BiographyComponent } from './biography/biography.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { InstagramPostComponent } from './instagram-feed/instagram-post/instagram-post.component';
import { VideosComponent } from './videos/videos.component';
import { ImageFeedComponent } from './image-feed/image-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BiographyComponent,
    InstagramFeedComponent,
    InstagramPostComponent,
    VideosComponent,
    ImageFeedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxY2PlayerModule,
    AppRoutingModule
  ],
  entryComponents: [
    InstagramPostComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
