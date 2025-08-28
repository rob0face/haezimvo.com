import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'app-result-list',
  templateUrl: './result-list.html',
  styleUrls: ['./result-list.css'],
  imports: [CommonModule, MatInputModule, MatRadioModule, MatButtonModule, MatCardModule, MatTableModule]
})
export class ResultList {
  @Input() results: any[] = [];

  displayedColumns: string[] = ['origin', 'destination', 'volume', 'rate', 'fee'];
}
