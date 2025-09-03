import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  selector: 'app-search-form',
  imports: [CommonModule, FormsModule, MatInputModule, MatRadioModule, MatButtonModule, MatCardModule, MatTableModule, MatSelectModule],
  templateUrl: './search-form.html',
  styleUrls: ['./search-form.css']
})
export class SearchForm {
  origin: string = '';
  destination: string = '';
  volume: string = 'FCL';
  results: any[] = [];
  @Output() searchResults = new EventEmitter<any[]>();

  constructor(private http: HttpClient) {}

  onSearch() {
    this.http.get<any[]>('https://rob0face.github.io/HAEZIMVO/HAEZIMVO.json')
      .subscribe(data => {
        const filtered = data.filter(item =>
          (item.ORIGIN === this.origin || this.origin === 'All') &&
          (item.DESTINATION === this.destination.trim().toUpperCase() ||
            item.DEST_NATION_KO === this.destination.trim().toUpperCase() ||
            item.DESTINATION_KO === this.destination.trim().toUpperCase() ||
            this.destination == 'All') &&
          item.VOLUME === this.volume
        );
        this.results = filtered;
        this.searchResults.emit(filtered); // Emit results to parent
      });
  }
}
