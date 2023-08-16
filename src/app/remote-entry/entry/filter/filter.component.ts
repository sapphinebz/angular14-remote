import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  elRef: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {}

  ngOnInit(): void {}

  onInputChange(event: Event) {
    const inputEvent = event as InputEvent;
    const inputEl = inputEvent.currentTarget as HTMLInputElement;
    this.elRef.nativeElement.dispatchEvent(
      new CustomEvent('inputChange', { detail: inputEl.value })
    );
    // if (this.inputFn) {
    //   this.inputFn(inputEl.value);
    // }
  }
}
