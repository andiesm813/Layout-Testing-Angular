import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ImagesGenerationComponent } from './images-generation/images-generation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'flex-layout', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'flex-layout', component: FlexLayoutComponent, data: { text: 'Flex Layout' } },
  { path: 'grid-layout', component: GridLayoutComponent, data: { text: 'Grid Layout' } },
  { path: 'images-generation', component: ImagesGenerationComponent, data: { text: 'Images Generation' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
