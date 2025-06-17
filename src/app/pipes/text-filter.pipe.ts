import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBreeds',
  standalone: true
})
export class FilterBreedsPipe implements PipeTransform {
  transform(breeds: any[], searchText: string): any[] 
  {
    if (!breeds) return [];

    if (!searchText) return breeds;

    const lower = searchText.toLowerCase();
    console.log('Filtering breeds with search text:', lower);
    return breeds.filter(breed => breed.name.toLowerCase().includes(lower));
  }
}