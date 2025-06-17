import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedsSelectorComponent } from './breeds-selector.component';
import { CatsService } from '../../core/services/cats.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('BreedsSelectorComponent', () => {
  let component: BreedsSelectorComponent;
  let fixture: ComponentFixture<BreedsSelectorComponent>;
  let catsServiceSpy: jasmine.SpyObj<CatsService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    catsServiceSpy = jasmine.createSpyObj('CatsService', [
      'getBreeds',
      'getBreedById',
      'getImagesByBreedId'
    ]);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    catsServiceSpy.getBreeds.and.returnValue(of([
      {
        breed_id: 'abys',
        breed_name: 'Abyssinian',
        breed_description: 'Abyssinian description',
        breed_origin: 'Ethiopia',
        name: 'Abyssinian',
        id: 'abys',
        description: 'Abyssinian description',
        origin: 'Ethiopia'
      },
      {
        breed_id: 'beng',
        breed_name: 'Bengal',
        breed_description: 'Bengal description',
        breed_origin: 'USA',
        name: 'Bengal',
        id: 'beng',
        description: 'Bengal description',
        origin: 'USA'
      }
    ]));
    catsServiceSpy.getBreedById.and.returnValue(of({
      breed_id: 'abys',
      breed_name: 'Abyssinian',
      breed_description: 'Abyssinian description',
      breed_origin: 'Ethiopia',
      name: 'Abyssinian',
      id: 'abys',
      description: 'Abyssinian description',
      origin: 'Ethiopia'
    }));
    catsServiceSpy.getImagesByBreedId.and.returnValue(of([{ url: 'img1.jpg' }, { url: 'img2.jpg' }]));

    await TestBed.configureTestingModule({
      imports: [BreedsSelectorComponent, CommonModule],
      providers: [
        { provide: CatsService, useValue: catsServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar las razas al inicializar', () => {
    expect(component.breeds.length).toBe(2);
    expect(component.breeds[0].breed_name).toBe('Abyssinian');
  });

  it('debe actualizar selectedBreed e images al cambiar de raza', () => {
    const event = { target: { value: 'abys' } } as any;
    component.onBreedChange(event);
    expect(catsServiceSpy.getBreedById).toHaveBeenCalledWith('abys');
    expect(catsServiceSpy.getImagesByBreedId).toHaveBeenCalledWith('abys');
  });

  it('debe navegar a la tabla al llamar goToTable', () => {
    component.goToTable();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/table']);
  });
});
