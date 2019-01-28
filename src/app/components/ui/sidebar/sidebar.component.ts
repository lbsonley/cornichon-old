import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public collapsed = false;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      console.log('is small screen');
      this.collapsed = true;
    }

  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
