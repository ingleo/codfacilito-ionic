import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoriesService } from './repositories/repositories.service'; 

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RepositoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
