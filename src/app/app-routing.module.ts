import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './general/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCreateComponent} from './components/users-create/users-create.component';
import { UsersDeleteComponent} from './components/users-delete/users-delete.component';
import { UsersUpdateComponent} from './components/users-update/users-update.component';
const routes: Routes = [
  { path:'header', component: HeaderComponent},
  { path:'users', component: UsersListComponent},
  { path:'delete', component: UsersDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
