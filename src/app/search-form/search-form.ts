import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultList } from '../result-list/result-list';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'app-search-form',
  imports: [CommonModule, FormsModule, ResultList, MatInputModule, MatRadioModule, MatButtonModule, MatCardModule, MatTableModule],
  templateUrl: './search-form.html',
  styleUrls: ['./search-form.css']
})
export class SearchForm {
  origin: string = '';
  destination: string = '';
  volume: string = 'FCL';
  results: any[] = [];

  constructor(private http: HttpClient) {}

  onSearch() {
    this.http.get<any[]>('https://rob0face.github.io/haezimvo.com/HAEZIMVO.json')
      .subscribe(data => {
        this.results = data.filter(item =>
          item.ORIGIN === this.origin &&
          item.DESTINATION === this.destination &&
          item.VOLUME === this.volume
        );
      });
  }
}
