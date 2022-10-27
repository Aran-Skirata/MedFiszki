import { Component, INJECTOR, Input, OnInit } from '@angular/core';
import { Observable, range, take } from 'rxjs';
import { AnatomyTranslations } from 'src/model/AnatomyTranslations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MedFiszkiApiService } from '../services/med-fiszki-api.service';
import { Pagination } from 'src/model/Pagination';

@Component({
  selector: 'app-exam',
  templateUrl: './anatomy-translations.component.html',
  styleUrls: ['./anatomy-translations.component.css']
})
export class AnatomyTranslationsComponent implements OnInit {

  anatomyTranslations: AnatomyTranslations[] = [];
  pagination: Pagination;
  pageNumber: number = 1;
  pageSize: number = 10;
  paramsSub:any;
  categoryId:number;
  partId:number;

  constructor( private _medFiszkiApi: MedFiszkiApiService,private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.paramsSub = this._activatedRoute.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('categoryId'));
      this.partId = Number(params.get('partId'));
      this.loadAnatomyTranslations();
    })
  }

  loadAnatomyTranslations() {

      this._medFiszkiApi.getAnatomyTranslations(this.categoryId, this.partId, this.pageNumber, this.pageSize).subscribe(response => {
        this.anatomyTranslations = response.result;
        this.pagination = response.pagination;
      })
  }

  pageChanged(event: any) {

    this.pageNumber=event;
    this.loadAnatomyTranslations();

  }

  pageSizeChanged(event:any) {
    this.pageSize = event;
    this.loadAnatomyTranslations();
  }

  ngOnDestroy(): void 
  {
    this.paramsSub.unsubscribe();
  }
  
}
