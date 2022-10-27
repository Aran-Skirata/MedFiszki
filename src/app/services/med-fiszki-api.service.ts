import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnatomyTranslations } from 'src/model/AnatomyTranslations';
import {map} from 'rxjs'
import { PaginatedResult } from 'src/model/Pagination';
@Injectable({
  providedIn: 'root'
})
export class MedFiszkiApiService {

  anatomyTranslations:AnatomyTranslations[] = []
  paginatedResult: PaginatedResult<AnatomyTranslations[]> = new PaginatedResult<AnatomyTranslations[]>();

  constructor(private http: HttpClient) { }


  getAnatomyTranslations(category:number, part:number, pageNumber:number,pageSize:number) {

    let params = new HttpParams();

    params = params.append('CategoryId', category.toString());
    params = params.append('PartId', part.toString());
    params = params.append('PageNumber', pageNumber.toString());
    params = params.append('PageSize', pageSize.toString());



    return this.http.get<AnatomyTranslations[]>(environment.baseUrl + 'AnatomyTranslation',{ observe: 'response', params })
    .pipe (
      map(response => {
        this.paginatedResult.result = response.body!;
        this.paginatedResult.pagination = JSON.parse(response.headers.get('Pagination')!)
        

        return this.paginatedResult;
      })
    )
    
  }

  getRandomAnatomyTranslation() {

    return this.http.get<AnatomyTranslations>(environment.baseUrl + 'AnatomyTranslation/random');

  }
}
