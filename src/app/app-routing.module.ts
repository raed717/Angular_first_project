import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';

const routes: Routes = [
    {path:'product', component:ProductComponent},
    {path:'',redirectTo:'products', pathMatch:'full'},
    {path: 'emploie', component:OffresEmploiComponent},
    {path:'**',component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
