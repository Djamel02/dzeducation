import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatIconModule, MatInputModule, MatButtonToggleModule, MatCardModule, MatMenuModule, MatTableModule, MatSelectModule} from '@angular/material';
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
         MatSelectModule
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
        MatSelectModule
    ],
})
export class MaterialModule { }