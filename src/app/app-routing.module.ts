import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotebookComponent } from 'src/app/components/notebook/notebook.component';

const routes: Routes = [
  { path: '', component: NotebookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
