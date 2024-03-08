import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pges/login/login.component';
import { ProfileComponent } from './pges/profile/profile.component';
import { SignupComponent } from './pges/signup/signup.component';
import { HederComponent } from './components/heder/heder.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TableComponent } from './components/table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthIntecepror } from './inteceptors/auth.inteceptors';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    HederComponent,
    CategoriesComponent,
    TransactionFormComponent,
    TableComponent,
    TransactionsTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthIntecepror,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
