import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CompaniesComponent} from './companies/companies.component';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {DefaultTableComponent} from './default-table/default-table.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'table', component: DefaultTableComponent},
    {
        path: 'companies', component: CompaniesComponent,
        // children: [
        //     {path: '', component: RecipeStartComponent},
        //     {path: 'new', component: RecipeEditComponent},
        //     {path: ':id', component: RecipeDetailComponent},
        //     {path: ':id/edit', component: RecipeEditComponent},
        // ]
    },
    {path: 'not-found', component: ErrorPageComponent, data: {description: 'Page was not found'}},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}