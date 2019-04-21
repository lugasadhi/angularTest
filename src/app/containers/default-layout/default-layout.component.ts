import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import {AuthService} from '../../services/auth.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  
  nowDate = new Date();
  userdata;

  constructor(
    private _auth:AuthService,
    private _global:GlobalService,
    @Inject(DOCUMENT) _document?: any,
  ) {
    this.userdata = this._global.getLocalStorage("userdata");

    
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  
  logout(){
    this._auth.logout();
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
