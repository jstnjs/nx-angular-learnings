import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WizardService {
  constructor(private httpClient: HttpClient) {}

  getCodes() {
    return of([1, 2, 3]);
  }

  getCodeById(id: string) {
    const stepRecords = [
      {
        id: '1',
        name: 'Justin',
      },
      {
        id: '2',
        name: 'Lars',
      },
      {
        id: '3',
        name: 'Brooke',
      },
    ];

    const record = stepRecords.find((record) => record.id === id);
    return of(record);
  }
}
