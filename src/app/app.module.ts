import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CallInformationFormComponent } from './call-information-form/call-information-form.component';
import { HeaderComponent } from './header/header.component';
import { OperatorRatesService } from './service/operator-rates.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsageInfoComponent } from './usage-info/usage-info.component';

@NgModule({
   declarations: [
      AppComponent,
      CallInformationFormComponent,
      HeaderComponent,
      UsageInfoComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      OperatorRatesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
