import { Routes } from '@angular/router';
import { BreedsSelectorComponent } from './breed-selector/breeds-selector.component';
import { BreedsTableComponent } from './breed-table/breeds-table.component';

export const CATS_ROUTES: Routes = [
    {
        path: '',
        component: BreedsSelectorComponent
    },
    {
        path: 'table',
        component: BreedsTableComponent
    }
];