import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  // View child grants access to the input element
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  // Runs after the view is loaded
  ngAfterViewInit(): void {
    // creates an observable and sets up an event listener on an element
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        // allows us to control rate of user input. Wait before we begin to search the input
        debounceTime(500),
        // works like input.target.value
        pluck('target', 'value'),
        // if the value has changed from the last one, it will discard it and do nothing.
        distinctUntilChanged(),
        // wait to search until the user has typed some
        filter((value: string) => value.length > 3),
        // map returns the value as an observable
        map(value => value)
      )
      .subscribe((value: string) => {
        this.search.emit(value);
      });
  }

}
