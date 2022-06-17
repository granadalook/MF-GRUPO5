import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Response>{
    /* Making a GET request to the API. */
    return this.http.get<Response>(`${environment.apiUrl}/character`);
  }

}
