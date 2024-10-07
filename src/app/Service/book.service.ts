import { HttpClient } from "@angular/common/http";
import { Books } from "../Models/books";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { cwd } from "process";


@Injectable({
    providedIn: 'root'
})

export class BookService{
    baseUrl = 'https://localhost:7057/api/'

    constructor(private http:HttpClient){}

    //Get All Books
    getAllBooks():Observable<Books[]>{
        return this.http.get<Books[]>(this.baseUrl + 'books')
    }

        //Update
        updateBook(book:Books):Observable<Books>{
            return this.http.put<Books>(this.baseUrl + 'book', book)
        }
    
        //Add new card
        addBook(book:Books):Observable<Books>{
            console.log("skickar till databas" + book)
            return this.http.post<Books>(this.baseUrl + 'book/', book)
        }
    
        //Delete card
        deleteBook(id:string):Observable<Books>{
            return this.http.delete<Books>(this.baseUrl + 'book/' + id)
        }
}
