import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { component: HomeComponent, path: "", pathMatch: "full" },
  {
    path: "hotel",
    loadChildren: () =>
      import("./hotel/hotel.module").then(m => m.HotelModule)
  },
  {
    path: "test",
    loadChildren: () =>
      import("./http-example/http-example.module").then(m => m.HttpExampleModule)
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
