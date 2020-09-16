import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
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
import { DragulaModule } from 'ng2-dragula';
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
    RouterModule,
    DragulaModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAiMG2CbRpdEEqvKo34W1g2gFlNTcmjfHA',
      authDomain: 'raidview.firebaseapp.com',
      databaseURL: 'https://raidview.firebaseio.com',
      projectId: 'raidview',
      storageBucket: 'raidview.appspot.com',
      messagingSenderId: '702544996178',
      appId: '1:702544996178:web:d9b734ae6e10e81a053c8b',
      measurementId: 'G-DNY7WH71N8'
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
