import { Pipe, PipeTransform } from '@angular/core';
import { CatBreed } from '../core/model/cats-model';

@Pipe({
  name: 'filterBreeds',
  standalone: true
})
export class FilterBreedsPipe implements PipeTransform {
  transform(breeds: CatBreed[], searchText: string): CatBreed[] 
  {
    if (!breeds) return [];

    if (!searchText) return breeds;

    const lower = searchText.toLowerCase();
    console.log('Filtering breeds with search text:', lower);
    return breeds.filter(
      breed =>
      breed.breed_name.toLowerCase().includes(lower) ||
      breed.breed_origin.toLowerCase().includes(lower)
    );
  }
}