import { Character } from './../models/character.model';
import { CharacterServiceService } from './../services/character-service.service';
import { Component, OnInit } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  characters: Array<Character>; 

  constructor(private characterServiceService: CharacterServiceService) { 
    this.characters = new Array<Character>();
  }

  ngOnInit(): void {
  }

  getCharacters(){
    this.characterServiceService.getCharacters().subscribe((response) => {
      this.characters = response.results;      
    })
  }

}
