import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CatsService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  getBreeds() {
    return this.http.get<any[]>(`${this.apiUrl}/breeds`);
  }

  searchBreeds(query: string) {
    return this.http.get<any[]>(`${this.apiUrl}/breeds/search?q=${encodeURIComponent(query)}`);
  }

  getBreedById(breedId: string) {
    return this.http.get<any>(`${this.apiUrl}/breeds/${breedId}`);
  }

  getImagesByBreedId(breedId: string) {
    return this.http.get<any[]>(`${this.apiUrl}/imagesbybreedid`, { params: { breed_id: breedId } });
  }
  
}