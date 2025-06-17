import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../core/services/cats.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-breeds-selector',
  templateUrl: './breeds-selector.component.html',
  styleUrls: ['./breeds-selector.component.css'],
  imports: [CommonModule],
})
export class BreedsSelectorComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: any = null;
  images: any[] = [];

  constructor(private readonly catsService: CatsService, private readonly router: Router) {}

  ngOnInit() {
    this.catsService.getBreeds().subscribe(data => this.breeds = data);
  }

  onBreedChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const breedId = selectElement.value;
    this.catsService.getBreedById(breedId).subscribe(breed => this.selectedBreed = breed);
    this.catsService.getImagesByBreedId(breedId).subscribe(images => this.images = images);
    console.log('Image URLs:', this.images.map(image => image.url));
  }
  goToTable() {
    this.router.navigate(['/table']);
  }
}