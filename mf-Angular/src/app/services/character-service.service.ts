import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    /* Making a GET request to the API. */
    return this.http.get(`${environment.apiUrl}/character`);
  }

}
