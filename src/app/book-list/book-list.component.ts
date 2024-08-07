import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import Swal from 'sweetalert2';
import { SelectedBooksComponent } from "../selected-books/selected-books.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [SelectedBooksComponent,CommonModule,RouterModule,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
   books:any[]=[];
   selectedBooks:any[]=[];
   filteredBooks = [...this.books];
   searchTerm = '';
   constructor(private bookService :BookService){}

   filterBooks() {
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  ngOnInit(): void {
  this.bookService.getBooks().subscribe(data=>{
    this.books=data.docs;
  })
  }

  addBook(book:any):void{
    if (!this.selectedBooks.includes(book)) {
      this.selectedBooks.push(book);
    }
  }

  removeBook(book: any): void {
    this.selectedBooks = this.selectedBooks.filter(b => b !== book);
  }


   confirmDeletion(book: any): void {
    Swal.fire({
      title: 'Delete Book',
      text: 'Are you sure you want to delete this book from your selection?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeBook(book);
      }
    });
  }

}

