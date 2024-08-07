import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-selected-books',
  standalone: true,
  imports: [NgFor, BookCardComponent],
  templateUrl: './selected-books.component.html',
  styleUrls: ['./selected-books.component.css']
})
export class SelectedBooksComponent {
  @Input() books: any[] = [];
}
