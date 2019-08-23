import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      FormsModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatIconModule,
      MatMenuModule
    ],
    exports: [
      FormsModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatIconModule,
      MatMenuModule
    ]
  })
  export class AppMaterialModule { }
