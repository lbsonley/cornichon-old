import { Component, OnInit } from '@angular/core';
import { DebouncedResizeService } from '@app/services/debounced-resize.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public collapsed = false;

  constructor(private dr: DebouncedResizeService) { }

  ngOnInit() {
    this.collapsed = window.innerWidth < 768;
    this.dr.getScreenWidth()
      .subscribe((window) => {
        this.collapsed = window.innerWidth < 768;
      });
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
