import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { DebouncedResizeService } from '@app/services/debounced-resize.service';
import { MenuComponent } from './ui/menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    DebouncedResizeService
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
