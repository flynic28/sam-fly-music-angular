import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// import { NgxPageScrollModule,  } from 'ngx-page-scroll';
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
import { ContactComponent } from './contact/contact.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

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
    NavigationMenuComponent,
    ContactComponent,
    SocialIconsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    // NgxPageScrollCoreModule.forRoot({
    //   _logLevel: 5,
    //   duration: 2000
    // }),
    // NgxPageScrollModule,
    NgxY2PlayerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
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
