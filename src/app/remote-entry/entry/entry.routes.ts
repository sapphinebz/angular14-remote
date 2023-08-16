import { Route } from '@angular/router';
import { EntryComponent } from './entry.component';
import { FilterComponent } from './filter/filter.component';

export const remoteRoutes: Route[] = [
  { path: '', component: EntryComponent },
  {
    path: 'filter',
    component: FilterComponent,
  },
];
