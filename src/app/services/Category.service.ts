import {Injectable,signal} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { PagedResult }from "../models/paged-result";
import { Category } from "../models/Category";
 
@Injectable({providedIn:'root'})
 
export class CategoryService
{
    private apiUrl="http://localhost:5234/api/Category";
    Categories = signal<Category[]>([]);
    constructor(private http:HttpClient){}
    getPagedcategory
    (
    code: string,
    name: string,
    pageNumber: number,
    pageSize: number

    ):Observable<PagedResult<Category>> {
    let params = new HttpParams()
      .set('Code', code || '')
      .set('Name', name || '')
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);
 
    return this.http.get<PagedResult<Category>>(
      `${this.apiUrl}/GetAllPaged`,
      { params }
    );
  }


    GetAll():Observable<Category[]>
    {
        return this.http.get<Category[]>(`${this.apiUrl}/GetAll`);
    }
    GetById(id:number):Observable<Category>
    {
        return this.http.get<Category>(`${this.apiUrl}/GetById/${id}`);
    }
    create(request:Category):Observable<number>
    {
        return this.http.post<number>(`${this.apiUrl}/Create`,request);
    }
    Update(id:number, request:Category):Observable<boolean>
    {
        return this.http.put<boolean>(`${this.apiUrl}/Update/${id}`,request);
    }
    delete(id:number):Observable<boolean>
    {
        return this.http.delete<boolean>(`${this.apiUrl}/delete/${id}`);
    }
}