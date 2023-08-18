import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowCaseService {
  constructor() { }

  getDataApi(): Observable<any> {
    const data = [
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      }
    ];

    return of(data).pipe(
      delay(1500)
    );
  }
}
