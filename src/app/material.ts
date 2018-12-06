import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatIconModule, MatInputModule, MatButtonToggleModule, MatCardModule, MatMenuModule, MatTableModule, MatSelectModule, MatPaginatorModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  imports: [
      MatButtonModule,
       MatCheckboxModule,
        MatSidenavModule,
         MatToolbarModule,
         MatButtonModule,
         MatListModule,
         MatIconModule,
         MatInputModule,
         MatButtonToggleModule,
         MatCardModule,
         MatMenuModule,
         MatTableModule,
         MatSelectModule,
         MatPaginatorModule
        ],
  exports: [
      MatButtonModule,
       MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonToggleModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatSelectModule,
        MatPaginatorModule
    ],
})
export class MaterialModule { }