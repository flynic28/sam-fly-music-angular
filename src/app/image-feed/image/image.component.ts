import { Component, OnInit, Input, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../image-feed.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {
  @Input() image: Image;

  constructor(
    public activeModal: NgbActiveModal,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'image-modal');
  }

}
