import { Component, OnInit } from '@angular/core';
import { AnatomyTranslations } from 'src/model/AnatomyTranslations';
import { MedFiszkiApiService } from '../services/med-fiszki-api.service';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.css']
})
export class RandomCardComponent implements OnInit {
  anatomyQuestion: AnatomyTranslations;

  constructor( private _medFiszkiApi: MedFiszkiApiService) { 
  }


  ngOnInit(): void {
      this.loadAnatomyTranslations();
  }

  loadAnatomyTranslations() {
      this._medFiszkiApi.getRandomAnatomyTranslation().subscribe(value => {
        this.anatomyQuestion = value;
      })
  }

  getRandomItem() {

    this.loadAnatomyTranslations();
  }

}
