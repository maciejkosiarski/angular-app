import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CompaniesComponent} from './companies/companies.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {DropdownDirective} from './utils/dropdown.directive';
import {ErrorPageComponent} from './error-page/error-page.component';
import {TableComponent} from './table/table.component';
import {RowsService} from './table/rows.service';
import {AlertsComponent} from './alerts/alerts.component';
import {AlertsService} from './alerts/alerts.service';

@NgModule({
    declarations: [
        AppComponent,
        CompaniesComponent,
        DropdownDirective,
        HomeComponent,
        NavbarComponent,
        ErrorPageComponent,
        TableComponent,
        AlertsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
        RowsService,
        AlertsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
