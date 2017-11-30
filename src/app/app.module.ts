import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { StoreService } from './store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2Webstorage
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
