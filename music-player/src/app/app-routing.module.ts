import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Task 1: Import components here
import { TracksComponent } from './tracks/tracks.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
// Task 1: Add routes here
{path: "", component: TracksComponent},
{path: "favorites", component: FavoritesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
