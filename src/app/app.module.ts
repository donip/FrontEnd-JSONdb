import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule,
  MatInputModule, MatOptionModule, MatPaginator, MatSortModule, MatPaginatorModule,
  MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableviewComponent } from './tableview/tableview.component';


@NgModule({
  declarations: [
    AppComponent,
    TableviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
