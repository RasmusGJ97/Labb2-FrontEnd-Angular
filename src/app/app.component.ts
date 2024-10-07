import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Books } from './Models/books';
import { BookService } from './Service/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularFrontendMinimalAPI';

  books: Books[] = [];

  book: Books = {
    id:'',
    title:'',
    author:'',
    publiced:'',
    genre:'',
    description:'',
    available:''
  }

  selectedBook: Books | null = null;

  constructor(private bookservice:BookService){}


  ngOnInit():void{
    this.getAllBook();
  }
  // Get
  getAllBook(): void {
    this.bookservice.getAllBooks().subscribe({
      next: (response: any) => { // Typa som 'any' om du inte har en interface för hela svaret
        console.log(response); // Loggar hela svaret för felsökning
        if (response.isSuccess) {
          this.books = response.result; // Hämta böckerna från 'result'
        } else {
          console.error('Något gick fel:', response.errorMessages);
        }
      },
      error: (err) => {
        console.error('API-anrop misslyckades', err);
      }
    });
  }

    //Update
    updateBook(book:Books){
      this.bookservice.updateBook(book).subscribe(response => this.getAllBook())
    }
  
    //Add Method
    onSubmit(){
      if(this.book.id == ''){
        this.bookservice.addBook(this.book).subscribe(response =>{
          this.getAllBook();
          this.book = {
            id:'',
            title:'',
            author:'',
            publiced:'',
            genre:'',
            description:'',
            available:''
          }
        });
      }
      else{
        this.updateBook(this.book);
      }
    }
  
    //Delete
    onDelete(id:string){
      this.bookservice.deleteBook(id).subscribe(response => this.getAllBook());
    }
  
    populateForm(book:Books){
      this.book = book;
    }
}
