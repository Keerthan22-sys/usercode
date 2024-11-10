import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Task 1: Import components here

const routes: Routes = [
// Task 1: Add routes here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
