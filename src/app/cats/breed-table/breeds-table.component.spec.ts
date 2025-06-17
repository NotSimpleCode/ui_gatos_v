import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedsTableComponent } from './breeds-table.component';
import { CatsService } from '../../core/services/cats.service';
import { of } from 'rxjs';
import { FilterBreedsPipe } from '../../pipes/text-filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('BreedsTableComponent', () => {
  let component: BreedsTableComponent;
  let fixture: ComponentFixture<BreedsTableComponent>;
  let catsServiceSpy: jasmine.SpyObj<CatsService>;

  beforeEach(async () => {
    catsServiceSpy = jasmine.createSpyObj('CatsService', ['getBreeds']);
    catsServiceSpy.getBreeds.and.returnValue(of([
      {
        breed_id: 'persa',
        breed_name: 'Persa',
        breed_description: 'Pelaje largo',
        breed_origin: 'Irán',
        weight: { metric: '3-5' },
        name: 'Persa',
        origin: 'Irán',
        description: 'Pelaje largo'
      }
    ]));

    await TestBed.configureTestingModule({
      imports: [BreedsTableComponent, FilterBreedsPipe, CommonModule, FormsModule],
      providers: [
        { provide: CatsService, useValue: catsServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar las razas al inicializar', () => {
    expect(component.breeds.length).toBeGreaterThan(0);
    expect(component.breeds[0].name).toBe('Persa');
  });

  it('debe actualizar searchText al buscar', () => {
    component.filterText = 'siamés';
    component.onSearch();
    expect(component.searchText).toBe('siamés');
  });
});