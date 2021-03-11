import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConventionComponent } from './convention/convention.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ListEditComponent } from './inventory/list-edit/list-edit.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inventory', component: InventoryComponent, children: [
  {path: 'new', component: ListEditComponent},
  {path: ':id', component: InventoryComponent},
  {path: ':id/edit', component: ListEditComponent},
] },
{path:'convention', component: ConventionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
