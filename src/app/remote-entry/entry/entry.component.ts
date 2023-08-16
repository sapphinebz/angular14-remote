import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {
  document = inject(DOCUMENT);
  constructor() {}

  ngOnInit(): void {
    fromEvent<CustomEvent>(this.document, 'storeUpdated').subscribe((event) => {
      console.log(event.detail);
    });
  }
}
