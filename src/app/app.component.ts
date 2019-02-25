import { Component } from '@angular/core';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sam-fly-music-angular';
  menuOpen = false;
  constructor(
    public modal: NgbModal,
  ) {

  }

  showNavigationMenu(event: Event) {
    this.menuOpen = true;
    const params: NgbModalOptions = {
      size: 'lg',
      centered: true,
      windowClass: 'max-size-modal',
    };
    const navMenu = this.modal.open(NavigationMenuComponent, params);
    navMenu.result.then((result) => {
      this.menuOpen = false;
    })
  }
}
