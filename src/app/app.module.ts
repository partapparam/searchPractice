import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { VideoFilterPipe } from './pipes/video-filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
    VideoFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
