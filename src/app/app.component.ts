import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from "./book-list/book-list.component";
import { SelectedBooksComponent } from './selected-books/selected-books.component';
import { BookCardComponent } from "./book-card/book-card.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, SelectedBooksComponent, BookCardComponent],
  template: `<app-book-list><app-book-list>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book_task';
}
