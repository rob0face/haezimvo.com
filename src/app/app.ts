import { Component } from '@angular/core';
import { SearchForm } from './search-form/search-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchForm],
  template: `<app-search-form />`
})
export class App {}
