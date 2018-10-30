import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CompaniesComponent} from './companies/companies.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CompaniesComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
