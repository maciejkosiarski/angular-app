import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CompaniesComponent} from './companies/companies.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {
        path: 'companies', component: CompaniesComponent,
        // children: [
        //     {path: '', component: RecipeStartComponent},
        //     {path: 'new', component: RecipeEditComponent},
        //     {path: ':id', component: RecipeDetailComponent},
        //     {path: ':id/edit', component: RecipeEditComponent},
        // ]
    },
    // {path: 'shopping-list', component: ShoppingListComponent},
    // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}