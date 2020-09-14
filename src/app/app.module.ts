import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@app/../environments/environment';
import { AboutComponent } from '@app/about/about.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { SharedModule } from '@app/shared/shared.module';
import { reducers } from '@app/store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { localStorageSync } from 'ngrx-store-localstorage';

registerLocaleData(en);

export function localStorageSyncReducer(rootReducer: any) {
  return localStorageSync({ keys: ['raidview'], rehydrate: true })(rootReducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent, DashboardComponent, AboutComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
