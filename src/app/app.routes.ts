import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditPageComponent } from './create-edit-page/create-edit-page.component';

export const routes: Routes = [
  { path: 'create-edit-page', component: CreateEditPageComponent },
  // Du kan lägga till fler rutter här om du behöver
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }