import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpExampleComponent } from './http-example.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: "list", component: HttpExampleComponent }];
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,

    RouterModule.forChild(routes)
  ],
  declarations: [HttpExampleComponent],
  exports: [RouterModule]
})
export class HttpExampleModule { }
