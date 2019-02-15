import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { InstagramFeedObj, InstagramFeedData } from './instagram-feed.model';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/';
import { InstagramPostComponent } from './instagram-post/instagram-post.component';
declare var Instafeed: any;

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {

  @ViewChild('loadMore') loadMore: ElementRef;

  instagramFeed: InstagramFeedData[] = [];
  feed: any;
  constructor(
    public app: ApplicationRef,
    public ngZone: NgZone,
    private ref: ChangeDetectorRef,
    public modalService: NgbModal
  ) {
    this.feed = new Instafeed({
      get: 'user',
      userId: '9605215',
      sortBy: 'most-recent',
      clientId: '068c3640ac8648db958db6bda38bab07',
      accessToken: '9605215.1677ed0.439ed3975e9a498993af316347e8056f',
      resolution: 'standard_resolution',
      mock: true,
      success: (res: InstagramFeedObj) => {
        this.ngZone.run(() => {
          this.instagramFeed = this.instagramFeed ? this.instagramFeed.concat(res.data) : res.data;
        });
      },
      after: (data) => {
        // disable button if no more results to load
        if (!this.feed.hasNext()) {
            this.loadMore.nativeElement.setAttribute('disabled', 'disabled');
        }
      }
    });
  }

  ngOnInit() {
    this.loadMore.nativeElement.addEventListener('click', () => {
      this.feed.next();
    });
    this.feed.run();
  }

  openInstagramPost(instagramPost: InstagramFeedData) {
    console.log('openInstagramPost');
    console.log(instagramPost);
    const params: NgbModalOptions = {
      size: 'lg',
      centered: true,
      windowClass: 'modal-max-height overflow-y-hidden'
    };
    const instagramModal = this.modalService.open(InstagramPostComponent, params);
    instagramModal.componentInstance.post = instagramPost;
  }

}
