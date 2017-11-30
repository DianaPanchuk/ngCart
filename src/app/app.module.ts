import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { StoreService } from './store.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2Webstorage
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
