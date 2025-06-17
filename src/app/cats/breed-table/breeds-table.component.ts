import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../core/services/cats.service';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterBreedsPipe } from '../../pipes/text-filter.pipe';


@Component({
  standalone: true,
  selector: 'app-breeds-table',
  templateUrl: './breeds-table.component.html',
  styleUrls: ['./breeds-table.component.css'],
  imports: [CommonModule, FormsModule, FilterBreedsPipe]
})
export class BreedsTableComponent implements OnInit {
  breeds: any[] = [];
  filterText = '';
  searchText = '';

  constructor(private readonly catsService: CatsService, private readonly location: Location) {}

  ngOnInit() {
    this.catsService.getBreeds().subscribe(data => this.breeds = data);
  }
  onSearch() {
    this.searchText = this.filterText;
  }

  goBack() {
    this.location.back();
  }
}