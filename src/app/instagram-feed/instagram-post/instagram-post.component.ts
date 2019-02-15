import { Component, OnInit, Input,  } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstagramFeedData } from '../instagram-feed.model';

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.scss']
})
export class InstagramPostComponent implements OnInit {
  @Input() post: InstagramFeedData;
  constructor(
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit() { }

}
