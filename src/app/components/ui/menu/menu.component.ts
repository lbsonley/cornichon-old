import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DebouncedResizeService } from '@app/services/debounced-resize.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public isMobile = false;
  public menuExpanded = false;
  private resizeObservable$: Subscription;

  constructor(private dr: DebouncedResizeService) { }

  ngOnInit() {
    // initial value
    this.isMobile = window.innerWidth < 768;

    this.resizeObservable$ = this.dr.getScreenWidth()
      .subscribe((window) => {
        this.isMobile = window.innerWidth < 768;
      })

  }

  ngOnDestroy() {
    this.resizeObservable$.unsubscribe();
  }

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
  }

}
