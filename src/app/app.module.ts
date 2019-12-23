import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {CompaniesComponent} from './companies/companies.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {DropdownDirective} from './utils/dropdown.directive';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AlertsComponent} from './alerts/alerts.component';
import {AlertsService} from './alerts/alerts.service';
import {PaginationComponent} from './table/pagination/pagination.component';
import {SizeComponent} from './table/size/size.component';
// import {CompaniesService} from './companies/companies.service';
import {DefaultTableComponent} from './default-table/default-table.component';
import {DefaultRowsService} from './default-table/default-rows.service';
import {FilterComponent} from './table/filter/filter.component';

@NgModule({
    declarations: [
        AppComponent,
        CompaniesComponent,
        DropdownDirective,
        HomeComponent,
        NavbarComponent,
        ErrorPageComponent,
        AlertsComponent,
        PaginationComponent,
        SizeComponent,
        DefaultTableComponent,
        FilterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbAlertModule,
        NgbPaginationModule,
    ],
    providers: [
        AlertsService,
        // CompaniesService,
        DefaultRowsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
