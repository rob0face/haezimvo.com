import { Component } from '@angular/core';
import { SearchForm } from './search-form/search-form';
import { ResultList } from './result-list/result-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchForm, ResultList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  results: any[] = [];

  // You may need to handle search event and pass results to result-list
}