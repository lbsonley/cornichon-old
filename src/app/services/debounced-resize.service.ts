import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebouncedResizeService {

  constructor() { }

  getScreenWidth(): Observable<Window> {
    return fromEvent(window, 'resize')
      .pipe(
        debounceTime(150),
        map(event => event.target as Window)
      );
  }
}
