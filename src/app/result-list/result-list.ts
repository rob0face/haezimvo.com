import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  standalone: true,
  selector: 'app-result-list',
  templateUrl: './result-list.html',
  styleUrls: ['./result-list.css'],
  imports: [
    CommonModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule
  ]
})
export class ResultList {
  @Input() results: any[] = [];

  displayedColumns: string[] = [
    '선사',
    '출발지',
    '도착지',
    '20STD 운임',
    '40HC 운임',
    '운임 만료',
    '수수료'
  ];

  getValidFees(row: any): { name: string; unit: string; currency: string; amount: number }[] {
    const fees = [];

    for (let i = 1; i <= 7; i++) {
      const name = row[`ADDCOST${i}`];
      const unit = row[`ADDCOST${i}_UNIT`];
      const currency = row[`ADDCOST${i}_CURRENCY`];
      const amount = row[`ADDCOST${i}_AMOUNT`];

      // null은 제외, 0은 포함
      if (name !== null && unit !== null && currency !== null && amount !== null) {
        fees.push({ name, unit, currency, amount });
      }
    }

    return fees;
  }
}